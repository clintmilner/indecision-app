console.info('utils.js is running and imported into app.js');



const myMath = {
    square : (x) => x*x,

    add : (a,b) => a+b,

    subtract : (a,b) => a-b
};

// 2 types of exports
  // default exports
  // named exports


export { myMath as default };