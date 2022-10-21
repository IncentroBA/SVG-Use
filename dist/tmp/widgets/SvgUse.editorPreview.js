'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".svg-icon {\n  align-items: center;\n  display: flex;\n  height: var(--icon-size, 40px);\n  justify-content: center;\n  position: relative;\n  width: var(--icon-size, 40px);\n}\n\n.svg-icon__svg {\n  height: var(--icon-size, 40px);\n  width: var(--icon-size, 40px);\n}\n\n/* Editor Preview Styles */\n\n.svg-icon-preview {\n  align-items: center;\n  display: flex;\n}\n\n.svg-icon-preview__icon {\n  align-items: center;\n  background-color: #0397ec;\n  border-radius: 4px;\n  color: white;\n  display: flex;\n  font-size: 16px;\n  font-weight: bold;\n  height: var(--icon-size, 40px);\n  justify-content: center;\n  width: var(--icon-size, 40px);\n}\n\n.svg-icon-preview__text {\n  margin-left: 8px;\n}\n\n.svg-icon-preview__text--smaller {\n  display: block;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN2Z1VzZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFDL0I7O0FBR0EsMEJBQTBCOztBQUMxQjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsImZpbGUiOiJTdmdVc2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2Zy1pY29uIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUsIDQwcHgpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogdmFyKC0taWNvbi1zaXplLCA0MHB4KTtcbn1cblxuLnN2Zy1pY29uX19zdmcge1xuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSwgNDBweCk7XG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUsIDQwcHgpO1xufVxuXG5cbi8qIEVkaXRvciBQcmV2aWV3IFN0eWxlcyAqL1xuLnN2Zy1pY29uLXByZXZpZXcge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3ZnLWljb24tcHJldmlld19faWNvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzk3ZWM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSwgNDBweCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogdmFyKC0taWNvbi1zaXplLCA0MHB4KTtcbn1cblxuLnN2Zy1pY29uLXByZXZpZXdfX3RleHQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uc3ZnLWljb24tcHJldmlld19fdGV4dC0tc21hbGxlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG59Il19 */";
var stylesheet=".svg-icon {\n  align-items: center;\n  display: flex;\n  height: var(--icon-size, 40px);\n  justify-content: center;\n  position: relative;\n  width: var(--icon-size, 40px);\n}\n\n.svg-icon__svg {\n  height: var(--icon-size, 40px);\n  width: var(--icon-size, 40px);\n}\n\n/* Editor Preview Styles */\n\n.svg-icon-preview {\n  align-items: center;\n  display: flex;\n}\n\n.svg-icon-preview__icon {\n  align-items: center;\n  background-color: #0397ec;\n  border-radius: 4px;\n  color: white;\n  display: flex;\n  font-size: 16px;\n  font-weight: bold;\n  height: var(--icon-size, 40px);\n  justify-content: center;\n  width: var(--icon-size, 40px);\n}\n\n.svg-icon-preview__text {\n  margin-left: 8px;\n}\n\n.svg-icon-preview__text--smaller {\n  display: block;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN2Z1VzZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFDL0I7O0FBR0EsMEJBQTBCOztBQUMxQjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsImZpbGUiOiJTdmdVc2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2Zy1pY29uIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUsIDQwcHgpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogdmFyKC0taWNvbi1zaXplLCA0MHB4KTtcbn1cblxuLnN2Zy1pY29uX19zdmcge1xuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSwgNDBweCk7XG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUsIDQwcHgpO1xufVxuXG5cbi8qIEVkaXRvciBQcmV2aWV3IFN0eWxlcyAqL1xuLnN2Zy1pY29uLXByZXZpZXcge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3ZnLWljb24tcHJldmlld19faWNvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzk3ZWM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSwgNDBweCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogdmFyKC0taWNvbi1zaXplLCA0MHB4KTtcbn1cblxuLnN2Zy1pY29uLXByZXZpZXdfX3RleHQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uc3ZnLWljb24tcHJldmlld19fdGV4dC0tc21hbGxlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG59Il19 */";
styleInject(css_248z);

var SvgUse = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': css_248z,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(SvgUse);

function preview({
  svgName,
  svgSize,
  svgColorVar
}) {
  return react.createElement("div", {
    className: "svg-icon-preview"
  }, react.createElement("div", {
    className: "svg-icon-preview__icon"
  }, "SVG"), react.createElement("p", {
    className: "svg-icon-preview__text"
  }, svgName, react.createElement("span", {
    className: "svg-icon-preview__text--smaller"
  }, svgSize, "px, ", svgColorVar)));
}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ZnVXNlLmVkaXRvclByZXZpZXcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi8uLi8uLi9zcmMvU3ZnVXNlLmVkaXRvclByZXZpZXcuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2aWV3KHsgc3ZnTmFtZSwgc3ZnU2l6ZSwgc3ZnQ29sb3JWYXIgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLWljb24tcHJldmlld1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctaWNvbi1wcmV2aWV3X19pY29uXCI+U1ZHPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdmctaWNvbi1wcmV2aWV3X190ZXh0XCI+XG4gICAgICAgICAgICAgICAge3N2Z05hbWV9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ZnLWljb24tcHJldmlld19fdGV4dC0tc21hbGxlclwiPlxuICAgICAgICAgICAgICAgICAgICB7c3ZnU2l6ZX1weCwge3N2Z0NvbG9yVmFyfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdDc3MoKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL3VpL1N2Z1VzZS5jc3NcIik7XG59XG4iXSwibmFtZXMiOlsic3R5bGVJbmplY3QiLCJjc3MiLCJyZWYiLCJpbnNlcnRBdCIsImRvY3VtZW50IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJwcmV2aWV3Iiwic3ZnTmFtZSIsInN2Z1NpemUiLCJzdmdDb2xvclZhciIsImdldFByZXZpZXdDc3MiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBU0EsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQzdCLEVBQUEsSUFBS0EsR0FBRyxLQUFLLEtBQUssQ0FBbEIsRUFBc0JBLEdBQUcsR0FBRyxFQUFOLENBQUE7QUFDdEIsRUFBQSxJQUFJQyxRQUFRLEdBQUdELEdBQUcsQ0FBQ0MsUUFBbkIsQ0FBQTs7QUFFQSxFQUFBLElBQUksQ0FBQ0YsR0FBRCxJQUFRLE9BQU9HLFFBQVAsS0FBb0IsV0FBaEMsRUFBNkM7QUFBRSxJQUFBLE9BQUE7QUFBUyxHQUFBOztBQUV4RCxFQUFBLElBQUlDLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFULElBQWlCRCxRQUFRLENBQUNFLG9CQUFULENBQThCLE1BQTlCLENBQUEsQ0FBc0MsQ0FBdEMsQ0FBNUIsQ0FBQTtBQUNBLEVBQUEsSUFBSUMsS0FBSyxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWixDQUFBO0VBQ0FELEtBQUssQ0FBQ0UsSUFBTixHQUFhLFVBQWIsQ0FBQTs7RUFFQSxJQUFJTixRQUFRLEtBQUssS0FBakIsRUFBd0I7SUFDdEIsSUFBSUUsSUFBSSxDQUFDSyxVQUFULEVBQXFCO0FBQ25CTCxNQUFBQSxJQUFJLENBQUNNLFlBQUwsQ0FBa0JKLEtBQWxCLEVBQXlCRixJQUFJLENBQUNLLFVBQTlCLENBQUEsQ0FBQTtBQUNELEtBRkQsTUFFTztNQUNMTCxJQUFJLENBQUNPLFdBQUwsQ0FBaUJMLEtBQWpCLENBQUEsQ0FBQTtBQUNELEtBQUE7QUFDRixHQU5ELE1BTU87SUFDTEYsSUFBSSxDQUFDTyxXQUFMLENBQWlCTCxLQUFqQixDQUFBLENBQUE7QUFDRCxHQUFBOztFQUVELElBQUlBLEtBQUssQ0FBQ00sVUFBVixFQUFzQjtBQUNwQk4sSUFBQUEsS0FBSyxDQUFDTSxVQUFOLENBQWlCQyxPQUFqQixHQUEyQmIsR0FBM0IsQ0FBQTtBQUNELEdBRkQsTUFFTztJQUNMTSxLQUFLLENBQUNLLFdBQU4sQ0FBa0JSLFFBQVEsQ0FBQ1csY0FBVCxDQUF3QmQsR0FBeEIsQ0FBbEIsQ0FBQSxDQUFBO0FBQ0QsR0FBQTtBQUNGOzs7Ozs7Ozs7Ozs7OztBQ3ZCTSxTQUFTZSxPQUFULENBQWlCO0VBQUVDLE9BQUY7RUFBV0MsT0FBWDtBQUFvQkMsRUFBQUEsV0FBQUE7QUFBcEIsQ0FBakIsRUFBb0Q7RUFDdkQsT0FDSVgsbUJBQUEsQ0FBQSxLQUFBLEVBQUE7QUFBSyxJQUFBLFNBQVMsRUFBQyxrQkFBQTtHQUNYLEVBQUFBLG1CQUFBLENBQUEsS0FBQSxFQUFBO0FBQUssSUFBQSxTQUFTLEVBQUMsd0JBQUE7QUFBZixHQUFBLEVBQUEsS0FBQSxDQURKLEVBRUlBLG1CQUFBLENBQUEsR0FBQSxFQUFBO0FBQUcsSUFBQSxTQUFTLEVBQUMsd0JBQUE7QUFBYixHQUFBLEVBQ0tTLE9BREwsRUFFSVQsbUJBQUEsQ0FBQSxNQUFBLEVBQUE7QUFBTSxJQUFBLFNBQVMsRUFBQyxpQ0FBQTtBQUFoQixHQUFBLEVBQ0tVLE9BREwsRUFBQSxNQUFBLEVBQ2tCQyxXQURsQixDQUZKLENBRkosQ0FESixDQUFBO0FBV0gsQ0FBQTtBQUVNLFNBQVNDLGFBQVQsR0FBeUI7RUFDNUIsT0FBT0MsVUFBUCxDQUFBO0FBQ0g7Ozs7OyJ9
