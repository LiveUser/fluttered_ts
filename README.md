# Fluttered TypeScript
Create websites in a similar way to Flutter.

## Follow these steps
### 1. Create a Typescript file
### 2. Import
import the JavaScript file from the .ts file where you'll be creating the webpage using TS/JS. Note: The entire fluttered_ts.js is located inside the fluttered_ts.ts file which transpiles into fluttered_ts.js file.
~~~ts
import * as fts from './fluttered_ts.js';
~~~
### 3. Create a Scaffold(base widget)
Create a Scaffold Widget and continue adding content from there.
~~~ts
import * as fts from './fluttered_ts.js';

fts.Scaffold({
    body: fts.Container({
        width: new fts.Size(100, fts.SizeUnit.percent),
        crossAxisAlignment: fts.CrossAxisAlignment.center,
        children: [
            fts.Container({
                width: new fts.Size(100, fts.SizeUnit.percent),
                height: new fts.Size(250),
                style: new fts.BoxStyle({
                    color: fts.Color.fromName("yellow"),
                    borderRadius: new fts.Size(10),
                    border: new fts.Border({
                        borderType: fts.BorderType.dashed,
                        size: new fts.Size(2),
                        color: fts.Color.fromName("green"),
                    }),
                }),
                margin: fts.EdgeInsets.all(new fts.Size(10)),
                padding: fts.EdgeInsets.all(new fts.Size(10)),
                mainAxisAlignment: fts.MainAxisAlignment.center,
                crossAxisAlignment: fts.CrossAxisAlignment.center,
                children: fts.TextWidget({
                    text: "Hello World",
                    id: "testText",
                    link: new fts.Link({
                        link: "https://www.google.com/",
                        target: fts.LinkTarget.openTab,
                    }),
                    textAlign: fts.TextAlign.center,
                    style: new fts.TextStyle({
                        fontSize: new fts.Size(20),
                        fontFamily: "Arial",
                        color: fts.Color.fromName("blue"),
                    }),
                }),
            }),
            fts.Container({
                crossAxisAlignment: fts.CrossAxisAlignment.center,
                margin: fts.EdgeInsets.only({
                    top: new fts.Size(20),
                    bottom: new fts.Size(20),
                }),
                children: fts.Image({
                    source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Test.svg/1200px-Test.svg.png",
                    width: new fts.Size(30, fts.SizeUnit.percent),
                }),
            }),
            fts.InputField({
                width: new fts.Size(30, fts.SizeUnit.percent),
                onInput: (newValue)=>{
                    document.getElementById("testText").innerHTML = newValue;
                },
            }),
            //Create a Stateful Widget Counter
            Counter(),
        ],
    }),
});

function Counter():HTMLElement{
    var counter:number = 0;
    var id:string = "counter";
    var statefulWidget = fts.StatefulWidget({
        id: id,
        child: ()=>{
            return fts.GestureDetector({
                onTap: ()=>{
                    counter++;
                    fts.SetState(id);
                },
                child: fts.Container({
                    padding: fts.EdgeInsets.all(new fts.Size(10)),
                    margin: fts.EdgeInsets.only({
                        top: new fts.Size(10),
                        bottom: new fts.Size(10),
                    }),
                    style: new fts.BoxStyle({
                        color: fts.Color.fromName("blue"),
                    }),
                    children: fts.TextWidget({
                        text: `Tapped: ${counter} times`,
                        style: new fts.TextStyle({
                            color: fts.Color.fromName("white"),
                        }),
                    }),
                }),
            });
        },
    });
    return statefulWidget;
}
~~~
### 4. Compile
Use the tsc command to transpile TypeScript into js
### 5. Create an HTML file
Create an HTML file to reference the generated JavaScript file in order to run it in the browser.
~~~html
<!DOCTYPE html>
<html>
    <head>
        <script type="module" src="./javascript/test.js"></script>
    </head>
    <body>

    </body>
</html>
~~~
## Widgets
Currently available widgets. Functions that return an HTMLElement in order to be able to build webpages using TypeScript.
- Scaffold
<br>Inserts an HTMLElement (Widget) into the body of the HTML Document.
- Container
<br>A div that behaves like Flutter's Container, Column and Row, all in one. The children property can contain either one Widget or and array of Widgets.
- TextWidget
<br>A p element.
- Image
<br>An image element.
- InputField
<br>HTML input element
- StatefulWidget
<br>A Widget that can reload it's child using the SetState function.
- GestureDetector
<br>Adds events to its child Widget.