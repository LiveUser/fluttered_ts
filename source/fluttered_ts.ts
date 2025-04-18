//Variables
//------------------------------------------------------------------------------------------------

//Enums
//------------------------------------------------------------------------------------------------
enum TextAlign{
    start,
    center,
    end,
}
enum SizeUnit{
    cm,
    mm,
    in,
    px,
    pt,
    pc,
    em,
    ex,
    ch,
    rem,
    vw,
    vh,
    vmin,
    vmax,
    percent,
}
enum BorderType{
    dotted,
    dashed,
    solid,
    double,
    groove,
    ridge,
    inset,
    outset,
    none,
    hidden,
}
enum MainAxisAlignment{
    start,
    center,
    end,
    spaceBetween,
    spaceAround,
    spaceEvenly,
}
enum CrossAxisAlignment{
    start,
    center,
    end,
}
enum FlexDirection{
    column,
    row,
}
enum LinkTarget{
    openTab,
    sameTab,
}
//Classes
//------------------------------------------------------------------------------------------------
class Size{
    public size:number;
    public unit:SizeUnit;
    constructor (size: number, unit?:SizeUnit){
        this.size = size;
        this.unit = unit;
    }
}
class Color{
    public color:string;
    private constructor(color:string){
        this.color = color;
    }
    public static fromRGBA(r:number, g:number, b:number,a?:number):Color{
        var color = `rgba(${r}, ${g}, ${b}, ${a ?? 1})`;
        return new Color(color);
    }
    public static fromHex(colorHex:string):Color{
        var color = colorHex;
        return new Color(color);
    }
    public static fromName(colorName:string):Color{
        var color = colorName;
        return new Color(color);
    }
    public getColor():string{
        return this.color;
    }
}
class BoxStyle{
    public color?:Color;
    public borderRadius?:Size;
    public border?:Border;
    constructor(parameters:{
        color?:Color,
        borderRadius?:Size,
        border?:Border,
    }){
        this.color = parameters.color;
        this.borderRadius = parameters.borderRadius;
        this.border = parameters.border;
    }
}
class TextStyle{
    public fontSize?:Size;
    public color?:Color;
    public fontFamily?:string;
    constructor (parameters:{
        fontSize?:Size,
        color?:Color,
        fontFamily?:string,
    }){
        this.color = parameters.color;
        this.fontFamily = parameters.fontFamily;
        this.fontSize = parameters.fontSize;
    }
}
class Border{
    public borderType?:BorderType;
    public size?:Size;
    public color?:Color;
    constructor(parameters:{
        borderType?:BorderType,
        size?:Size,
        color?:Color,
    }){
        this.borderType = parameters.borderType;
        this.size = parameters.size;
        this.color = parameters.color;
    };
}
class EdgeInsets{
    public top:Size;
    public bottom:Size;
    public left:Size;
    public right:Size;
    constructor(parameters:{
        top:Size,
        bottom:Size,
        left:Size,
        right:Size,
    }){
        this.top = parameters.top;
        this.bottom = parameters.bottom;
        this.left = parameters.left;
        this.right = parameters.right;
    }
    public static all(size:Size):EdgeInsets{
        return new EdgeInsets({
            top: size,
            bottom: size,
            left: size,
            right: size,
        });
    }
    public static only(parameters:{
        top?:Size,
        bottom?:Size,
        left?:Size,
        right?:Size,
    }):EdgeInsets{
        return new EdgeInsets({
            top: parameters.top ?? new Size(0),
            bottom: parameters.bottom ?? new Size(0),
            left: parameters.left ?? new Size(0),
            right: parameters.right ?? new Size(0),
        });
    }
}
class Link{
    public link:string;
    public target:LinkTarget;
    constructor(parameters:{
        link:string,
        target:LinkTarget,
    }){
        this.link = parameters.link;
        this.target = parameters.target;
    }
}
//Functions
//------------------------------------------------------------------------------------------------
function textAlignToString(textAlign:TextAlign){
    if(textAlign == TextAlign.start || textAlign == null){
        return "start";
    }else if(textAlign == TextAlign.center){
        return "center";
    }else{
        return "end";
    }
}
function getUnit(unit:SizeUnit):string{
    if(unit == SizeUnit.cm){
        return "cm";
    }else if(unit == SizeUnit.mm){
        return "mm";
    }else if(unit == SizeUnit.in){
        return "in";
    }else if(unit == SizeUnit.px){
        return "px";
    }else if(unit == SizeUnit.pt){
        return "pt";
    }else if(unit == SizeUnit.pc){
        return "pc";
    }else if(unit == SizeUnit.em){
        return "em";
    }else if(unit == SizeUnit.ex){
        return "ex";
    }else if(unit == SizeUnit.ch){
        return "ch";
    }else if(unit == SizeUnit.rem){
        return "rem";
    }else if(unit == SizeUnit.vw){
        return "vw";
    }else if(unit == SizeUnit.vh){
        return "vh";
    }else if(unit == SizeUnit.vmin){
        return "vmin";
    }else if(unit == SizeUnit.vmax){
        return "vmax";
    }else if(unit == SizeUnit.percent){
        return "%";
    }else{
        return "px";
    }
}
function getBorderType(borderType:BorderType):string{
    if(borderType == BorderType.dashed){
        return "dashed";
    }else if(borderType == BorderType.dotted){
        return "dotted";
    }else if(borderType == BorderType.double){
        return "double";
    }else if(borderType == BorderType.groove){
        return "groove";
    }else if(borderType == BorderType.hidden){
        return "hidden";
    }else if(borderType == BorderType.inset){
        return "inset";
    }else if(borderType == BorderType.none){
        return "none";
    }else if(borderType == BorderType.outset){
        return "outset";
    }else if(borderType == BorderType.ridge){
        return "ridge";
    }else if(borderType == BorderType.solid){
        return "solid";
    }else{
        return "none";
    }
}
function stringifySize(size:Size):string{
    return `${size.size}${getUnit(size.unit)}`;
}
function stringifyBorder(border:Border){
    return `${getBorderType(border.borderType)} ${border.size.size}${getUnit(border.size.unit)}`;
}
function getMainAxisAlignment(mainAxisAlignment:MainAxisAlignment):string{
    if(mainAxisAlignment == MainAxisAlignment.start){
        return "flex-start";
    }else if(mainAxisAlignment == MainAxisAlignment.center){
        return "center";
    }else if(mainAxisAlignment == MainAxisAlignment.end){
        return "flex-end";
    }else if(mainAxisAlignment == MainAxisAlignment.spaceBetween){
        return "space-between";
    }else if(mainAxisAlignment == MainAxisAlignment.spaceAround){
        return "space-around";
    }else if(mainAxisAlignment == MainAxisAlignment.spaceEvenly){
        return "space-evenly";
    }else{
        return "flex-start";
    }
}
function getCrossAxisAlignment(crossAxisAlignment:CrossAxisAlignment):string{
    if(crossAxisAlignment == CrossAxisAlignment.start){
        return "flex-start";
    }else if(crossAxisAlignment == CrossAxisAlignment.center){
        return "center";
    }else if(crossAxisAlignment == CrossAxisAlignment.end){
        return "flex-end";
    }else{
        return "flex-start";
    }
}
function getLinkTarget(target:LinkTarget):string{
    if(target == LinkTarget.openTab){
        return "_blank";
    }else{
        return "_self";
    }
}
//Widgets (Functions that return HTML elements)
//------------------------------------------------------------------------------------------------
//Add Scaffolds in different elements called Page to support adding pages on top of one another
function Scaffold(parameters:{
    body: HTMLElement,
}):void{
    //Do stuff after page has been loaded to override defaults like the body margins.
    document.addEventListener('DOMContentLoaded', function() {
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
        if(parameters.body == null){
            throw "Argument body cannot be null in Scaffold Widget.";
        }else{
            document.body.append(parameters.body);
        }
    });
}
//Container
function Container(parameters:{
    width?: Size,
    height?: Size,
    margin?: EdgeInsets,
    padding?: EdgeInsets,
    style?:BoxStyle,
    //TODO: Main axis and Cross axis alignment
    mainAxisAlignment?: MainAxisAlignment,
    crossAxisAlignment?: CrossAxisAlignment,
    //TODO: Flex direction
    flexDirection?: FlexDirection,
    children: HTMLElement | HTMLElement[],
}):HTMLElement{
    //Create element
    var element:HTMLElement = document.createElement("div");

    //Display flex
    element.style.display = "flex";

    //Sizing
    if(parameters.width != null){
        element.style.width = stringifySize(parameters.width);
    }
    if(parameters.height != null){
        element.style.height = stringifySize(parameters.height);
    }
    //Style box
    if(parameters.style != null){
        if(parameters.style.color != null){
            element.style.backgroundColor = parameters.style.color.color;
        }
        if(parameters.style.border != null){
            element.style.border = stringifyBorder(parameters.style.border);
            if(parameters.style.border.color != null){
                element.style.borderColor = parameters.style.border.color.color;
            }
        }
    }
    //Margin
    if(parameters.margin != null){
        element.style.marginTop = stringifySize(parameters.margin.top);
        element.style.marginBottom = stringifySize(parameters.margin.bottom);
        element.style.marginLeft = stringifySize(parameters.margin.left);
        element.style.marginRight = stringifySize(parameters.margin.right);
    }

    //Padding
    if(parameters.padding != null){
        element.style.paddingTop = stringifySize(parameters.padding.top);
        element.style.paddingBottom = stringifySize(parameters.padding.bottom);
        element.style.paddingLeft = stringifySize(parameters.padding.left);
        element.style.paddingRight = stringifySize(parameters.padding.right);
    }

    //MainAxisAlignment
    if(parameters.mainAxisAlignment != null){
        element.style.justifyContent = getMainAxisAlignment(parameters.mainAxisAlignment);
    }

    //CrossAxisAlignment
    if(parameters.crossAxisAlignment != null){
        element.style.alignItems = getCrossAxisAlignment(parameters.crossAxisAlignment);
    }

    //Flex direction
    if(parameters.flexDirection == FlexDirection.row){
        element.style.flexDirection = "row";
    }else{
        element.style.flexDirection = "column";
    }

    //Append child
    if(parameters.children instanceof  HTMLElement){
        element.append(parameters.children);
    }else{
        for(let i:number = 0; i < parameters.children.length; i++){
            element.append(parameters.children[i]);
        }
    }

    //return element
    return element;
}
//Text
function TextWidget(parameters:{
    text: string,
    textAlign?: TextAlign,
    style?: TextStyle,
    link?:Link,
    //TODO: id

}):HTMLElement{
    //Create element
    var element:HTMLElement = document.createElement("p");

    //Link
    if(parameters.link != null){
        element = document.createElement("a");
        element.style.margin = "0";
        element.style.padding = "0";
        //Add link
        (element as HTMLAnchorElement).href = parameters.link.link;
        (element as HTMLAnchorElement).target = getLinkTarget(parameters.link.target);
    }
    //Add text to element
    element.innerHTML = parameters.text;
    //textAlign
    element.style.textAlign = textAlignToString(parameters.textAlign);
    //Add styling
    if(parameters.style != null){
        if(parameters.style.color){
            element.style.color = parameters.style.color.color;
        }
        if(parameters.style.fontSize != null){
            element.style.fontSize = stringifySize(parameters.style.fontSize);
        }
        if(parameters.style.fontFamily != null){
            element.style.fontFamily = parameters.style.fontFamily;
        }
    }
    //Return modified element
    return element;
}
//Image
function Image(parameters:{
    source:string,
    width?:Size,
    height?:Size,
}):HTMLElement{
    //Create element
    var element:HTMLElement = document.createElement("img");

    //Image source
    (element as HTMLImageElement).src = parameters.source;

    //Image Width
    if(parameters.width != null){
        element.style.width = stringifySize(parameters.width);
    }

    //Image Height
    if(parameters.height != null){
        element.style.height = stringifySize(parameters.height);
    }

    return element;
}
//GestureDetector

//Input

//FutureBuilder

//Export all
//---------------------------------------------------
export {
    SizeUnit,
    Size,
    TextAlign,
    TextStyle,
    Color,
    BoxStyle,
    Border,
    BorderType,
    EdgeInsets,
    MainAxisAlignment,
    CrossAxisAlignment,
    FlexDirection,
    LinkTarget,
    Link,
    Scaffold,
    Container,
    TextWidget,
    Image,
};