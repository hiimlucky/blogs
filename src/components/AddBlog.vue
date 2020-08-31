<template>
  <div id='add-blog'>
    <h2>添加博客</h2>
    <form v-if='!submmited'>
        <label>博客标题</label>
        <input type='text' v-model="blog.title">

        <label>博客内容</label>
        <textarea v-model="blog.content"></textarea>
  
         <div id='checkboxes'>
            <label>html css</label>
            <input type='checkbox' value="html css" v-model="blog.categories">
             <label>jQ</label>
            <input type='checkbox' value="jQ" v-model="blog.categories">
             <label>webpack</label>
            <input type='checkbox' value="webpack" v-model="blog.categories">
             <label>es6</label>
            <input type='checkbox' value="es6" v-model="blog.categories">
             <label>vue</label>
            <input type='checkbox' value="vue" v-model="blog.categories">
             <label>其他</label>
            <input type='checkbox' value='其他' v-model="blog.categories">
         </div> 
         <label>作者:</label>  
         <select v-model="blog.author" class="wintha">
             <option v-for='author in authors' :key='author'>
                  {{author}}
             </option>
         </select>

         <button v-on:click.prevent='post'>添加博客</button>

    </form>

     


     <div v-if='submmited'>
         <h3>您的博客发布成功</h3>
     </div>

     <div id='preview'>
       <h3>博客总览</h3>
       <p>博客标题:{{blog.title}}</p> 
       <p>博客内容:</p>
       <p>{{blog.content}}</p> 
       <p>博客分类:</p>
       <ul>
          <li v-for='category in blog.categories' :key="category">
             {{category}}
          </li>
       </ul>
        <p>作者:{{blog.author}}</p>
     </div>
    


  </div>
</template>

<script>
export default {
  data(){
     return{
         blog:{
             title:'',
             content:'',
             categories:[],
             author:''
         },
         authors:['kaivon','普通用户'],
         submmited:false

     }
  },
  methods: {
      post:function(){
        // console.log('1');
        this.$http.post('https://jsonplaceholder.typicode.com/posts',this.blog)
        // this.$http.post('https://www.bmob.cn/app/browser/296706/1615901/posts',this.blog)
        //  this.$http.post('https://vuedemo-b1233.firebaseio.com/posts.json',this.blog)
             .then(function(data){
              console.log(data);
              this.submmited=true
             })
    
      }
  },
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type='text'], textarea, select{
    display: block;
    width: 100%;
    paddind:8px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
     margin-right: 10px;

}
button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}
.wintha{
    width: 67px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
textarea{
    height: 170px;
}



</style>