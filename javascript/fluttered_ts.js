//Variables
//------------------------------------------------------------------------------------------------
//Enums
//------------------------------------------------------------------------------------------------
var TextAlign;
(function (TextAlign) {
    TextAlign[TextAlign["start"] = 0] = "start";
    TextAlign[TextAlign["center"] = 1] = "center";
    TextAlign[TextAlign["end"] = 2] = "end";
})(TextAlign || (TextAlign = {}));
var SizeUnit;
(function (SizeUnit) {
    SizeUnit[SizeUnit["cm"] = 0] = "cm";
    SizeUnit[SizeUnit["mm"] = 1] = "mm";
    SizeUnit[SizeUnit["in"] = 2] = "in";
    SizeUnit[SizeUnit["px"] = 3] = "px";
    SizeUnit[SizeUnit["pt"] = 4] = "pt";
    SizeUnit[SizeUnit["pc"] = 5] = "pc";
    SizeUnit[SizeUnit["em"] = 6] = "em";
    SizeUnit[SizeUnit["ex"] = 7] = "ex";
    SizeUnit[SizeUnit["ch"] = 8] = "ch";
    SizeUnit[SizeUnit["rem"] = 9] = "rem";
    SizeUnit[SizeUnit["vw"] = 10] = "vw";
    SizeUnit[SizeUnit["vh"] = 11] = "vh";
    SizeUnit[SizeUnit["vmin"] = 12] = "vmin";
    SizeUnit[SizeUnit["vmax"] = 13] = "vmax";
    SizeUnit[SizeUnit["percent"] = 14] = "percent";
})(SizeUnit || (SizeUnit = {}));
var BorderType;
(function (BorderType) {
    BorderType[BorderType["dotted"] = 0] = "dotted";
    BorderType[BorderType["dashed"] = 1] = "dashed";
    BorderType[BorderType["solid"] = 2] = "solid";
    BorderType[BorderType["double"] = 3] = "double";
    BorderType[BorderType["groove"] = 4] = "groove";
    BorderType[BorderType["ridge"] = 5] = "ridge";
    BorderType[BorderType["inset"] = 6] = "inset";
    BorderType[BorderType["outset"] = 7] = "outset";
    BorderType[BorderType["none"] = 8] = "none";
    BorderType[BorderType["hidden"] = 9] = "hidden";
})(BorderType || (BorderType = {}));
var MainAxisAlignment;
(function (MainAxisAlignment) {
    MainAxisAlignment[MainAxisAlignment["start"] = 0] = "start";
    MainAxisAlignment[MainAxisAlignment["center"] = 1] = "center";
    MainAxisAlignment[MainAxisAlignment["end"] = 2] = "end";
    MainAxisAlignment[MainAxisAlignment["spaceBetween"] = 3] = "spaceBetween";
    MainAxisAlignment[MainAxisAlignment["spaceAround"] = 4] = "spaceAround";
    MainAxisAlignment[MainAxisAlignment["spaceEvenly"] = 5] = "spaceEvenly";
})(MainAxisAlignment || (MainAxisAlignment = {}));
var CrossAxisAlignment;
(function (CrossAxisAlignment) {
    CrossAxisAlignment[CrossAxisAlignment["start"] = 0] = "start";
    CrossAxisAlignment[CrossAxisAlignment["center"] = 1] = "center";
    CrossAxisAlignment[CrossAxisAlignment["end"] = 2] = "end";
})(CrossAxisAlignment || (CrossAxisAlignment = {}));
var FlexDirection;
(function (FlexDirection) {
    FlexDirection[FlexDirection["column"] = 0] = "column";
    FlexDirection[FlexDirection["row"] = 1] = "row";
})(FlexDirection || (FlexDirection = {}));
var LinkTarget;
(function (LinkTarget) {
    LinkTarget[LinkTarget["openTab"] = 0] = "openTab";
    LinkTarget[LinkTarget["sameTab"] = 1] = "sameTab";
})(LinkTarget || (LinkTarget = {}));
var InputType;
(function (InputType) {
    InputType["button"] = "button";
    InputType["checkbox"] = "checkbox";
    InputType["color"] = "color";
    InputType["date"] = "date";
    InputType["datetimeLocal"] = "datetime-local";
    InputType["email"] = "email";
    InputType["file"] = "file";
    InputType["hidden"] = "hidden";
    InputType["image"] = "image";
    InputType["month"] = "month";
    InputType["number"] = "number";
    InputType["password"] = "password";
    InputType["radio"] = "radio";
    InputType["range"] = "range";
    InputType["reset"] = "reset";
    InputType["search"] = "search";
    InputType["submit"] = "submit";
    InputType["tel"] = "tel";
    InputType["text"] = "text";
    InputType["time"] = "time";
    InputType["url"] = "url";
    InputType["week"] = "week";
})(InputType || (InputType = {}));
//Classes
//------------------------------------------------------------------------------------------------
class Size {
    constructor(size, unit) {
        this.size = size;
        this.unit = unit;
    }
}
class Color {
    constructor(color) {
        this.color = color;
    }
    static fromRGBA(r, g, b, a) {
        var color = `rgba(${r}, ${g}, ${b}, ${a !== null && a !== void 0 ? a : 1})`;
        return new Color(color);
    }
    static fromHex(colorHex) {
        var color = colorHex;
        return new Color(color);
    }
    static fromName(colorName) {
        var color = colorName;
        return new Color(color);
    }
    getColor() {
        return this.color;
    }
}
class BoxStyle {
    constructor(parameters) {
        this.color = parameters.color;
        this.borderRadius = parameters.borderRadius;
        this.border = parameters.border;
    }
}
class TextStyle {
    constructor(parameters) {
        this.color = parameters.color;
        this.fontFamily = parameters.fontFamily;
        this.fontSize = parameters.fontSize;
    }
}
class Border {
    constructor(parameters) {
        this.borderType = parameters.borderType;
        this.size = parameters.size;
        this.color = parameters.color;
    }
    ;
}
class EdgeInsets {
    constructor(parameters) {
        this.top = parameters.top;
        this.bottom = parameters.bottom;
        this.left = parameters.left;
        this.right = parameters.right;
    }
    static all(size) {
        return new EdgeInsets({
            top: size,
            bottom: size,
            left: size,
            right: size,
        });
    }
    static only(parameters) {
        var _a, _b, _c, _d;
        return new EdgeInsets({
            top: (_a = parameters.top) !== null && _a !== void 0 ? _a : new Size(0),
            bottom: (_b = parameters.bottom) !== null && _b !== void 0 ? _b : new Size(0),
            left: (_c = parameters.left) !== null && _c !== void 0 ? _c : new Size(0),
            right: (_d = parameters.right) !== null && _d !== void 0 ? _d : new Size(0),
        });
    }
}
class Link {
    constructor(parameters) {
        this.link = parameters.link;
        this.target = parameters.target;
    }
}
//Functions
//------------------------------------------------------------------------------------------------
function textAlignToString(textAlign) {
    if (textAlign == TextAlign.start || textAlign == null) {
        return "start";
    }
    else if (textAlign == TextAlign.center) {
        return "center";
    }
    else {
        return "end";
    }
}
function getUnit(unit) {
    if (unit == SizeUnit.cm) {
        return "cm";
    }
    else if (unit == SizeUnit.mm) {
        return "mm";
    }
    else if (unit == SizeUnit.in) {
        return "in";
    }
    else if (unit == SizeUnit.px) {
        return "px";
    }
    else if (unit == SizeUnit.pt) {
        return "pt";
    }
    else if (unit == SizeUnit.pc) {
        return "pc";
    }
    else if (unit == SizeUnit.em) {
        return "em";
    }
    else if (unit == SizeUnit.ex) {
        return "ex";
    }
    else if (unit == SizeUnit.ch) {
        return "ch";
    }
    else if (unit == SizeUnit.rem) {
        return "rem";
    }
    else if (unit == SizeUnit.vw) {
        return "vw";
    }
    else if (unit == SizeUnit.vh) {
        return "vh";
    }
    else if (unit == SizeUnit.vmin) {
        return "vmin";
    }
    else if (unit == SizeUnit.vmax) {
        return "vmax";
    }
    else if (unit == SizeUnit.percent) {
        return "%";
    }
    else {
        return "px";
    }
}
function getBorderType(borderType) {
    if (borderType == BorderType.dashed) {
        return "dashed";
    }
    else if (borderType == BorderType.dotted) {
        return "dotted";
    }
    else if (borderType == BorderType.double) {
        return "double";
    }
    else if (borderType == BorderType.groove) {
        return "groove";
    }
    else if (borderType == BorderType.hidden) {
        return "hidden";
    }
    else if (borderType == BorderType.inset) {
        return "inset";
    }
    else if (borderType == BorderType.none) {
        return "none";
    }
    else if (borderType == BorderType.outset) {
        return "outset";
    }
    else if (borderType == BorderType.ridge) {
        return "ridge";
    }
    else if (borderType == BorderType.solid) {
        return "solid";
    }
    else {
        return "none";
    }
}
function stringifySize(size) {
    return `${size.size}${getUnit(size.unit)}`;
}
function stringifyBorder(border) {
    return `${getBorderType(border.borderType)} ${border.size.size}${getUnit(border.size.unit)}`;
}
function getMainAxisAlignment(mainAxisAlignment) {
    if (mainAxisAlignment == MainAxisAlignment.start) {
        return "flex-start";
    }
    else if (mainAxisAlignment == MainAxisAlignment.center) {
        return "center";
    }
    else if (mainAxisAlignment == MainAxisAlignment.end) {
        return "flex-end";
    }
    else if (mainAxisAlignment == MainAxisAlignment.spaceBetween) {
        return "space-between";
    }
    else if (mainAxisAlignment == MainAxisAlignment.spaceAround) {
        return "space-around";
    }
    else if (mainAxisAlignment == MainAxisAlignment.spaceEvenly) {
        return "space-evenly";
    }
    else {
        return "flex-start";
    }
}
function getCrossAxisAlignment(crossAxisAlignment) {
    if (crossAxisAlignment == CrossAxisAlignment.start) {
        return "flex-start";
    }
    else if (crossAxisAlignment == CrossAxisAlignment.center) {
        return "center";
    }
    else if (crossAxisAlignment == CrossAxisAlignment.end) {
        return "flex-end";
    }
    else {
        return "flex-start";
    }
}
function getLinkTarget(target) {
    if (target == LinkTarget.openTab) {
        return "_blank";
    }
    else {
        return "_self";
    }
}
//Widgets (Functions that return HTML elements)
//------------------------------------------------------------------------------------------------
//Add Scaffolds in different elements called Page to support adding pages on top of one another
function Scaffold(parameters) {
    //Do stuff after page has been loaded to override defaults like the body margins.
    document.addEventListener('DOMContentLoaded', function () {
        //Clear html body contents
        document.body.innerHTML = "";
        //Remove default body margin and padding
        document.body.style.margin = "0px";
        //document.body.style.padding = "0";
        //Make it a flexbox column
        document.body.style.display = "flex"; //display: flex; justify-content: start; width: 100%; height: 100%;";
        document.body.style.justifyContent = "start";
        document.body.style.width = "100%";
        document.body.style.height = "100%";
        //Insert Widget contained in arguments body property
        if (parameters.body == null) {
            throw "Argument body cannot be null in Scaffold Widget.";
        }
        else {
            document.body.append(parameters.body);
        }
    });
}
//Container
function Container(parameters) {
    //Create element
    var element = document.createElement("div");
    //Display flex
    element.style.display = "flex";
    //Sizing
    if (parameters.width != null) {
        element.style.width = stringifySize(parameters.width);
        //Remove Margin
        if (parameters.margin != null) {
            element.style.width = `calc(${element.style.width} - ${stringifySize(parameters.margin.left)} - ${stringifySize(parameters.margin.right)})`;
        }
        //Remove Padding
        if (parameters.padding != null) {
            element.style.width = `calc(${element.style.width} - ${stringifySize(parameters.padding.left)} - ${stringifySize(parameters.padding.right)})`;
        }
    }
    if (parameters.height != null) {
        //Remove Margin
        if (parameters.margin != null) {
            element.style.height = `calc(${element.style.height} - ${stringifySize(parameters.margin.top)} - ${stringifySize(parameters.margin.bottom)})`;
        }
        //Remove Padding
        if (parameters.padding != null) {
            element.style.height = `calc(${element.style.height} - ${stringifySize(parameters.padding.top)} - ${stringifySize(parameters.padding.bottom)})`;
        }
    }
    //Style box
    if (parameters.style != null) {
        if (parameters.style.color != null) {
            element.style.backgroundColor = parameters.style.color.color;
        }
        if (parameters.style.border != null) {
            element.style.border = stringifyBorder(parameters.style.border);
            if (parameters.style.border.color != null) {
                element.style.borderColor = parameters.style.border.color.color;
            }
        }
    }
    //Margin
    if (parameters.margin != null) {
        element.style.marginTop = stringifySize(parameters.margin.top);
        element.style.marginBottom = stringifySize(parameters.margin.bottom);
        element.style.marginLeft = stringifySize(parameters.margin.left);
        element.style.marginRight = stringifySize(parameters.margin.right);
    }
    //Padding
    if (parameters.padding != null) {
        element.style.paddingTop = stringifySize(parameters.padding.top);
        element.style.paddingBottom = stringifySize(parameters.padding.bottom);
        element.style.paddingLeft = stringifySize(parameters.padding.left);
        element.style.paddingRight = stringifySize(parameters.padding.right);
    }
    //MainAxisAlignment
    if (parameters.mainAxisAlignment != null) {
        element.style.justifyContent = getMainAxisAlignment(parameters.mainAxisAlignment);
    }
    //CrossAxisAlignment
    if (parameters.crossAxisAlignment != null) {
        element.style.alignItems = getCrossAxisAlignment(parameters.crossAxisAlignment);
    }
    //Flex direction
    if (parameters.flexDirection == FlexDirection.row) {
        element.style.flexDirection = "row";
    }
    else {
        element.style.flexDirection = "column";
    }
    //Append child
    if (parameters.children instanceof HTMLElement) {
        element.append(parameters.children);
    }
    else {
        for (let i = 0; i < parameters.children.length; i++) {
            element.append(parameters.children[i]);
        }
    }
    //return element
    return element;
}
//Text
function TextWidget(parameters) {
    //Create element
    var element = document.createElement("p");
    //Link
    if (parameters.link != null) {
        element = document.createElement("a");
        element.style.margin = "0";
        element.style.padding = "0";
        //Add link
        element.href = parameters.link.link;
        element.target = getLinkTarget(parameters.link.target);
    }
    //id
    if (parameters.id != null) {
        element.id = parameters.id;
    }
    //Add text to element
    element.innerHTML = parameters.text;
    //textAlign
    element.style.textAlign = textAlignToString(parameters.textAlign);
    //Add styling
    if (parameters.style != null) {
        if (parameters.style.color) {
            element.style.color = parameters.style.color.color;
        }
        if (parameters.style.fontSize != null) {
            element.style.fontSize = stringifySize(parameters.style.fontSize);
        }
        if (parameters.style.fontFamily != null) {
            element.style.fontFamily = parameters.style.fontFamily;
        }
    }
    //Return modified element
    return element;
}
//Image
function Image(parameters) {
    //Create element
    var element = document.createElement("img");
    //Image source
    element.src = parameters.source;
    //Image Width
    if (parameters.width != null) {
        element.style.width = stringifySize(parameters.width);
    }
    //Image Height
    if (parameters.height != null) {
        element.style.height = stringifySize(parameters.height);
    }
    return element;
}
//GestureDetector
//Add all events from https://www.w3schools.com/jsref/dom_obj_event.asp
function GestureDetector(parameters) {
    //Add events
    if (parameters.onTap != null) {
        parameters.child.addEventListener("click", () => {
            parameters.onTap();
        });
    }
    if (parameters.onMouseOver != null) {
        parameters.child.addEventListener("mouseover", () => {
            parameters.onMouseOver();
        });
    }
    if (parameters.onMouseOut != null) {
        parameters.child.addEventListener("mouseout", () => {
            parameters.onMouseOut();
        });
    }
    if (parameters.onMouseEnter != null) {
        parameters.child.addEventListener("mouseenter", () => {
            parameters.onMouseEnter();
        });
    }
    if (parameters.onMouseLeave != null) {
        parameters.child.addEventListener("mouseleave", () => {
            parameters.onMouseLeave();
        });
    }
    if (parameters.onKeyDown != null) {
        parameters.child.addEventListener("keydown", () => {
            parameters.onKeyDown();
        });
    }
    if (parameters.onOnline != null) {
        parameters.child.addEventListener("online", () => {
            parameters.onOnline();
        });
    }
    if (parameters.onTap != null) {
        parameters.child.addEventListener("offline", () => {
            parameters.onOffline();
        });
    }
    //return modified element
    return parameters.child;
}
//Input
function InputField(parameters) {
    //Create element
    var element = document.createElement("input");
    //id
    if (parameters.id != null) {
        element.id = parameters.id;
    }
    //InputType
    element.type = parameters.inputType;
    //Sizing
    if (parameters.width != null) {
        element.style.width = stringifySize(parameters.width);
        //Remove Margin
        if (parameters.margin != null) {
            element.style.width = `calc(${element.style.width} - ${stringifySize(parameters.margin.left)} - ${stringifySize(parameters.margin.right)})`;
        }
        //Remove Padding
        if (parameters.padding != null) {
            element.style.width = `calc(${element.style.width} - ${stringifySize(parameters.padding.left)} - ${stringifySize(parameters.padding.right)})`;
        }
    }
    if (parameters.height != null) {
        //Remove Margin
        if (parameters.margin != null) {
            element.style.height = `calc(${element.style.height} - ${stringifySize(parameters.margin.top)} - ${stringifySize(parameters.margin.bottom)})`;
        }
        //Remove Padding
        if (parameters.padding != null) {
            element.style.height = `calc(${element.style.height} - ${stringifySize(parameters.padding.top)} - ${stringifySize(parameters.padding.bottom)})`;
        }
    }
    //Style box
    if (parameters.style != null) {
        if (parameters.style.color != null) {
            element.style.backgroundColor = parameters.style.color.color;
        }
        if (parameters.style.border != null) {
            element.style.border = stringifyBorder(parameters.style.border);
            if (parameters.style.border.color != null) {
                element.style.borderColor = parameters.style.border.color.color;
            }
        }
    }
    //Margin
    if (parameters.margin != null) {
        element.style.marginTop = stringifySize(parameters.margin.top);
        element.style.marginBottom = stringifySize(parameters.margin.bottom);
        element.style.marginLeft = stringifySize(parameters.margin.left);
        element.style.marginRight = stringifySize(parameters.margin.right);
    }
    //Padding
    if (parameters.padding != null) {
        element.style.paddingTop = stringifySize(parameters.padding.top);
        element.style.paddingBottom = stringifySize(parameters.padding.bottom);
        element.style.paddingLeft = stringifySize(parameters.padding.left);
        element.style.paddingRight = stringifySize(parameters.padding.right);
    }
    //Attach events
    element.addEventListener("change", () => {
        parameters.onChange(element.value);
    });
    element.addEventListener("input", () => {
        parameters.onInput(element.value);
    });
    return element;
}
//Stateful Widget
function StatefulWidget(parameters) {
    //Create element
    var element = document.createElement("span");
    //id
    element.id = parameters.id;
    //custom element
    const event = new Event("reloadStatefulWidget");
    //Add custom event
    element.addEventListener("reloadStatefulWidget", () => {
        element.innerHTML = "";
        element.append(parameters.child());
    });
    //Append child
    element.append(parameters.child());
    //return element
    return element;
}
//FutureBuilder
//Export all
//---------------------------------------------------
export { SizeUnit, Size, TextAlign, TextStyle, Color, BoxStyle, Border, BorderType, EdgeInsets, MainAxisAlignment, CrossAxisAlignment, FlexDirection, LinkTarget, Link, InputType, Scaffold, Container, TextWidget, Image, InputField, StatefulWidget, GestureDetector, };
