import * as fts from './fluttered_ts.js';

fts.Scaffold({
    body: fts.Container({
        width: new fts.Size(100,fts.SizeUnit.percent),
        height: new fts.Size(100,fts.SizeUnit.percent),
        style: new fts.BoxStyle({
            color: fts.Color.fromHex("#69b7f8"),
        }),
        children: [
            AppBar(),
            fts.Container({
                width: new fts.Size(100,fts.SizeUnit.percent),
                height: new fts.Size(100,fts.SizeUnit.percent),
                padding: fts.EdgeInsets.all(new fts.Size(20)),
                crossAxisAlignment: fts.CrossAxisAlignment.center,
                children: [
                    WhiteBox("A simple website showcasing the power of Fluttered TypeScript"),
                    //Using a container as SizedBox
                    fts.Container({
                        height: new fts.Size(20),
                    }),
                    fts.Image({
                        source: "https://lh3.googleusercontent.com/0qoi_Y1I5rKQyRjlG5vCy0qN2yCFJ4XIb4g7RPHHiYfyewEUvtUBg33kDvi3ptuhO6FIpu2wG-EaKDMNj5ZrYOTVbrbrwzQD0MmG_p6c2dcGto2AQnhwieA0Ag4bB_9j8g=w1280",
                        width: new fts.Size(50,fts.SizeUnit.percent),
                    }),
                    fts.Container({
                        height: new fts.Size(20),
                    }),
                    fts.TextWidget({
                        id: "textField",
                        text: "Input will be shown here",
                        style: new fts.TextStyle({
                            color: fts.Color.fromName("white"),
                        }),
                    }),
                    fts.InputField({
                        width: new fts.Size(50, fts.SizeUnit.percent),
                        onInput: (newValue)=>{
                            document.getElementById("textField").innerHTML = "Input: " + newValue;
                        },
                    }),
                    fts.Container({
                        height: new fts.Size(20),
                    }),
                    Counter(),
                ],
            }),
        ],
    }),
});

function AppBar():HTMLElement{
    return fts.Container({
        width: new fts.Size(100,fts.SizeUnit.percent),
        height: new fts.Size(60),
        style: new fts.BoxStyle({
            color: fts.Color.fromHex("#0e47a1"),
        }),
        mainAxisAlignment: fts.MainAxisAlignment.center,
        crossAxisAlignment: fts.CrossAxisAlignment.center,
        children: fts.TextWidget({
            text: "Fluttered TypeScript",
            style: new fts.TextStyle({
                color: fts.Color.fromName("white"),
                fontSize: new fts.Size(20),
                fontFamily: "Trebuchet MS",
            }),
        }),
    });
}
function WhiteBox(text:string):HTMLElement{
    return fts.Container({
        width: new fts.Size(50, fts.SizeUnit.percent),
        style: new fts.BoxStyle({
            color: fts.Color.fromName("white"),
            borderRadius: new fts.Size(10),
        }),
        padding: fts.EdgeInsets.all(new fts.Size(20)),
        children: fts.TextWidget({
            text: text,
            textAlign: fts.TextAlign.center,
        }),
    });
}
function Counter():HTMLElement{
    let counter = 0;
    const id = "counter";
    return fts.StatefulWidget({
        id: id,
        child: ()=>{
            return fts.Container({
                crossAxisAlignment: fts.CrossAxisAlignment.center,
                children: [
                    fts.TextWidget({
                        text: "Stateful Widget test: " + (counter == 0 ? "" : counter.toString()),
                        style: new fts.TextStyle({
                            color: fts.Color.fromName("white"),
                        }),
                    }),
                    fts.GestureDetector({
                        onTap: ()=>{
                            counter++;
                            fts.SetState("counter");
                        },
                        child: fts.Container({
                            width: new fts.Size(50),
                            height: new fts.Size(50),
                            padding: fts.EdgeInsets.all(new fts.Size(20)),
                            style: new fts.BoxStyle({
                                color: fts.Color.fromName("white"),
                                borderRadius: new fts.Size(100, fts.SizeUnit.percent),
                            }),
                            mainAxisAlignment: fts.MainAxisAlignment.center,
                            crossAxisAlignment: fts.CrossAxisAlignment.center,
                            children: [
                                fts.TextWidget({
                                    text: "+",
                                    style: new fts.TextStyle({
                                        color: fts.Color.fromHex("#0e47a1"),
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            });
        },
    });
}