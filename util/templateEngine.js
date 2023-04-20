import fs from "fs";

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

function renderPage(pageType, page, config={}) {
    const lessonTemplate = fs.readFileSync("./public/frontEnd/components/lessonTemplate.html").toString()
    .replace(

        "$TAB_TITLE", config.tabTitle || "nodeJsMandatory1"

        );
    const buttonTemplate = fs.readFileSync("./public/frontEnd/components/lessonButtons.html").toString()
      
    if (pageType == "lessonPage"){
    
        return lessonTemplate + page + buttonTemplate;
    
    }else{

        return lessonTemplate + page;
    
    }
}

export default {
    readPage,
    renderPage
};
