const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myobj) {
    // console.log(key)
    // console.log(key+":-"+myobj[key]);
    
}

const prog=["c","java",'c++']
for (const pairr in prog) {
    // console.log(pairr);
    
}

const mycoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"python",
        languagefilename:"py"
    },
    {
        languagename:"java",
        languagefilename:"java"
    }
]
mycoding.forEach((item)=>{
    console.log(item.languagename)
})