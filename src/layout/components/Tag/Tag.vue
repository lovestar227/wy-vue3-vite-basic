<script setup lang="ts">
import { ComponentPublicInstance, computed, reactive, ref, unref } from "vue";

import { useTranslate } from "/@/hooks/useTranslate";
import { $$t } from "/@/plugins/i18n";
import { routerStore } from "/@/store/modules/router";
import { addClass, hasClass, removeClass } from "/@/utils/index";

import { tagRightDropDownMenuItem } from "./types";
defineOptions({
  name: "Tag"
});

/**
 * --------------------------------------------
 * 标签 Start
 * --------------------------------------------
 */

const useRouterStore = routerStore();
const tagsList = computed(() => {
  return [
    {
      path: "/home",
      name: "HomePage",
      meta: {
        icon: "home-filled",
        title: $$t("menus.homePage"),
        notCloseTag: true
      }
    },
    ...useRouterStore.routeHistroy.filter(item => item.path !== "/home")
  ];
});

const route = useRoute();
const router = useRouter();
const acitiveRoute = computed(() => route.fullPath); //当前路由路径

/**
 * 关闭当前路由
 * @param path 关闭的路径
 */
const closeTag = function (path: string) {
  useRouterStore.removeRouteHistory(path);
  if (acitiveRoute.value == path) {
    router.push(tagsList.value[tagsList.value.length - 1].path);
  }
};

const instance = getCurrentInstance();
/**
 * 标签移入动画
 * @param index 标签index
 */
const tagMouseEnter = function (index: number) {
  const tagDom = instance.refs["tag-item" + index][0] as HTMLDivElement;
  if (tagDom && !hasClass(tagDom, "tag-active")) {
    addClass(tagDom, "tag-move-in");
    removeClass(tagDom, "tag-move-out");
  }
};

/**
 * 标签移出动画
 * @param index 标签index
 */
const tagMouseLeave = function (index: number) {
  const tagDom = instance.refs["tag-item" + index][0];
  if (tagDom && !hasClass(tagDom, "tag-active")) {
    addClass(tagDom, "tag-move-out");
    removeClass(tagDom, "tag-move-in");
  }
};

//tags水平偏移量
const tagsTranslateX = ref(0);
/**
 * 向左/向右移动tags
 * @param _move 移动方向与大小
 */
const tagsMove = function (_move: number) {
  const tagBoxDOM = instance.refs["tag-box"] as HTMLDivElement;
  const tagsDOM = (instance.refs["tags"] as ComponentPublicInstance).$el;
  const tagsBoxDOMWidth = tagBoxDOM.offsetWidth,
    tagsDOMWidth = tagsDOM.offsetWidth;
  //可以展示所有标签不需要右移动，如果存在负的偏移量，允许左移归位
  if (
    tagsBoxDOMWidth > tagsDOMWidth + 16 &&
    (_move < 0 || tagsTranslateX.value >= 0)
  ) {
    return;
  }
  if (_move > 0) {
    //左移
    const dis = Math.abs(tagsTranslateX.value);
    tagsTranslateX.value += dis > _move ? _move : dis;
  } else {
    //右移
    const dis = tagsBoxDOMWidth - tagsTranslateX.value - tagsDOMWidth - 16;
    tagsTranslateX.value += dis > _move ? dis : _move;
  }
};

/**
 * --------------------------------------------
 * 标签 End
 * --------------------------------------------
 */

/**
 * --------------------------------------------
 * 标签-右键菜单 Start
 * --------------------------------------------
 */
const dropDownMenus: tagRightDropDownMenuItem[] = reactive([
  {
    id: "refresh",
    icon: "ep:refresh",
    name: $$t("buttons.refresh"),
    show: true
  },
  {
    id: "closeCurrentTag",
    icon: "ep:close",
    name: $$t("buttons.closeCurrentTag"),
    show: true
  },
  {
    id: "closeLeftTag",
    icon: "fa:arrow-circle-o-left",
    name: $$t("buttons.closeLeftTag"),
    show: true
  },
  {
    id: "closeRightTag",
    icon: "fa:arrow-circle-o-right",
    name: $$t("buttons.closeRightTag"),
    show: true
  },
  {
    id: "closeOtherTag",
    icon: "fa:exclamation-triangle",
    name: $$t("buttons.closeOtherTag"),
    show: true
  },
  {
    id: "closeAllTag",
    icon: "ep:warning-filled",
    name: $$t("buttons.closeAllTag"),
    show: true
  }
]);

const nowDropDownMenus = computed(() =>
  dropDownMenus.filter(item => item.show)
); //当前显示的右键菜单
/**
 * 根据点击的tag位置，渲染右键菜单的选项
 * @param path 打开的菜单路由
 * @param index tagindex
 * @param isOpen true-菜单打开
 */
const dropDownMenuChange = function (
  path: string,
  index: number,
  isOpen: boolean
) {
  if (isOpen) {
    (instance.refs["tag-dropdown"] as any).forEach(
      (item: { id: string; loop: boolean; handleClose: () => void }) => {
        if (item.id !== path) {
          item.handleClose(); //关闭其他已经打开的右键菜单
        }
      }
    );
    //重新渲染右键菜单选项
    const tagsLength = tagsList.value.length;
    dropDownMenus[1].show = index === 0 ? false : true;
    dropDownMenus[2].show = index === 0 || index === 1 ? false : true;
    dropDownMenus[3].show = index === tagsLength - 1 ? false : true;
    dropDownMenus[4].show = tagsLength < 3 ? false : true;
    dropDownMenus[5].show = tagsLength < 3 ? false : true;
  }
};

/**
 *
 * @param id 菜单id
 * @param path 当前路由
 */
const handleTagsOption = function (id: string, path: string) {
  const handalTagMap = new Map([
    ["refresh", refresh],
    ["closeCurrentTag", closeTag],
    ["closeLeftTag", closeLeftTag],
    ["closeRightTag", closeRightTag],
    ["closeOtherTag", closeOtherTag],
    ["closeAllTag", closeAllTag]
  ]);
  handalTagMap.get(id)(path);
};
/**
 * 刷新当前标签
 */
function refresh(path) {
  const { fullPath, query } = unref(route);
  useRouterStore.clearKeepAliveCache(path);
  router.replace({
    path: "/redirect" + fullPath,
    query: query
  });
}
/**
 * 关闭左侧的标签
 * @param path 标签的路由路径
 */
function closeLeftTag(path: string) {
  useRouterStore.removeRouteHistoryLeft(path);
}
/**
 * 关闭右侧的标签
 * @param path 标签的路由路径
 */
function closeRightTag(path: string) {
  useRouterStore.removeRouteHistoryRight(path);
}
/**
 * 关闭其他的标签
 * @param path 标签的路由路径
 */
function closeOtherTag(path: string) {
  useRouterStore.removeRouteHistoryOther(path);
}
/**
 * 关闭所有的标签
 */
function closeAllTag() {
  useRouterStore.removeRouteHistoryAll();
}

/**
 * --------------------------------------------
 * 标签-右键菜单 End
 * --------------------------------------------
 */
</script>

<template>
  <div class="header-tag-main">
    <!-- 向左移动tags按钮 -->
    <div class="tag-box-left">
      <icon-ep-caret-left class="left-btn-icon" @click="tagsMove(100)" />
    </div>
    <!-- 分隔线 -->
    <!-- <div class="division-line"></div> -->
    <!-- tags -->
    <div class="tag-box" ref="tag-box">
      <TransitionGroup
        name="tags"
        class="tags"
        tag="div"
        ref="tags"
        :style="{ transform: `translateX(${tagsTranslateX}px)` }"
      >
        <div
          :class="[
            'tag-item',
            {
              'can-close-tag': !item.meta?.notCloseTag,
              'tag-active': item.path === acitiveRoute
            }
          ]"
          v-for="(item, index) in tagsList"
          :key="item.path"
          :ref="'tag-item' + index"
          @mouseenter="tagMouseEnter(index)"
          @mouseleave="tagMouseLeave(index)"
        >
          <!-- tag-item -->
          <div class="tag-item-box">
            <el-dropdown
              ref="tag-dropdown"
              trigger="contextmenu"
              placement="bottom-start"
              :id="item.path"
              :key="'tag-dropdown-' + item.path"
              @visible-change="dropDownMenuChange(item.path, index, $event)"
            >
              <router-link
                :to="item.path"
                :class="['tag-name', { 'first-tag': index == 0 }]"
              >
                {{ $t(item.meta.title) }}
              </router-link>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="jtem in nowDropDownMenus"
                    :key="jtem.id"
                    @click="handleTagsOption(jtem.id, item.path)"
                  >
                    <WyIconify
                      :icon="jtem.icon"
                      class="dropdown-item-icon"
                    ></WyIconify>
                    <span>{{ $t(jtem.name) }}</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>

            <icon-ep-close
              v-if="index != 0"
              class="close-btn"
              @click.stop="closeTag(item.path)"
            />
            <div class="tag-process"></div>
          </div>
        </div>
      </TransitionGroup>
    </div>
    <!-- 分隔线 -->
    <!-- <div class="division-line"></div> -->
    <!-- 向右移动tags按钮 -->
    <div class="tag-box-right">
      <icon-ep-caret-right class="right-btn-icon" @click="tagsMove(-100)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-tag-main {
  display: flex;
  width: 100%;
  height: 40px;
  box-shadow: 0 0 1px #888;

  .tag-box-left,
  .tag-box-right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 30px;
    height: 30px;
    font-size: 30px;
    color: #999;
    cursor: pointer;

    &:hover {
      color: $main-color;
      box-shadow: 0 0 3px $main-color;
    }
  }

  .tag-box-left {
    &::after {
      position: absolute;
      top: 0;
      right: -6px;
      height: 30px;
      border-left: 2px solid #ededed;
      content: "";
    }
  }

  .tag-box-right {
    &::before {
      position: absolute;
      top: 0;
      left: -6px;
      height: 30px;
      border-left: 2px solid #ededed;
      content: "";
    }
  }
  // .division-line {
  //   margin-top: 5px;
  //   height: 30px;
  //   border-left: 2px solid #ededed;
  // }

  .tag-box {
    flex: 1;
    overflow: hidden;

    .tags {
      float: left;
      white-space: nowrap;
      transition: transform 0.5s;
    }

    .tags-move,
    .tags-enter-active,
    .tags-leave-active {
      transition: all 0.5s ease;
    }

    .tags-enter-from,
    .tags-leave-to {
      opacity: 0;
    }

    .tags-leave-active {
      position: absolute;
    }

    .tag-item {
      display: inline-block;
      margin: 5px;
      height: 30px;
      font-size: 14px;
      box-shadow: 0 0 1px #888;
      cursor: pointer;

      .tag-item-box {
        position: relative;

        .tag-name {
          display: inline-block;
          padding: 0 5px;
          transition: all 0.5s;
          line-height: 30px;
        }

        .close-btn {
          position: absolute;
          top: 8px;
          right: 2px;
          display: inline-block;
          font-size: 11px;
          border-radius: 50%;
          color: $main-color;
          opacity: 0;
          transition: opacity 0.2s linear, color 0.2s linear,
            background-color 0.2s linear;

          &:hover {
            color: #fff;
            background-color: $main-color;
          }
        }

        .tag-process {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: $main-color;
          transition: all 0.5s;
        }
      }

      &.tag-active {
        color: $main-color;

        .tag-item-box {
          .close-btn {
            opacity: 1;
            transition: opacity 0.5s cubic-bezier(0.42, 0, 1, 1),
              color 0.2s linear background-color 0.2s linear;
          }

          .tag-name {
            padding-right: 16px;
          }

          .first-tag {
            padding-right: 5px;
          }

          .tag-process {
            width: 100%;
          }
        }
      }

      &:hover {
        box-shadow: 0 0 3px $main-color;
      }
    }

    .can-close-tag.tag-move-in .tag-item-box {
      .tag-name {
        padding-right: 16px;
      }

      .close-btn {
        display: inline-block;
        opacity: 1;
        transition: opacity 0.5s cubic-bezier(0.42, 0, 1, 1), color 0.2s linear,
          background-color 0.2s linear;
      }

      .tag-process {
        width: 100%;
      }
    }

    .can-close-tag.tag-move-out .tag-item-box {
      .close-btn {
        opacity: 0;
        transition: opacity 0.2s linear, color 0.2s linear,
          background-color 0.2s linear;
      }

      .tag-process {
        width: 0;
      }
    }
  }
}

.dropdown-item-icon {
  margin-right: 5px;
}
</style>
