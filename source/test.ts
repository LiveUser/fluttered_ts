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