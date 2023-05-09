export function useText() {
  /* text逐字拆分用<div>包裹 */
  const verticalText = (text: string) => {
    let textHtml = "";
    for (let len = 0; len < text.length; len++) {
      textHtml += `<div>${text[len]}</div>`;
    }
    return textHtml;
  };

  return {
    verticalText
  };
}
