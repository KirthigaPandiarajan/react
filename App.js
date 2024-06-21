// let root = ReactDOM.createRoot(document.getElementById("root"));
// let h1 = React.createElement("h1", {class: "heading"}, "Hello World!");
// root.render(h1);

// let root = ReactDOM.createRoot(document.getElementById('root'));
// let parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         React.createElement(
//             "h1",
//             {class: "heading"},
//             "Hello World"
//         )
//     )
// );
// root.render(parent);

let root = ReactDOM.createRoot(document.getElementById('root'));
let parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement(
            "h1",
            {class: "heading"},
            "Hello World"
        ),
        React.createElement(
            "h2",
            {class: "heading"},
            "Hello World"
        )]
    )
);
root.render(parent);
