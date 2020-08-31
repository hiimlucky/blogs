<template>
  <div v-theme:column="'narrow'"  id='show-blogs'>
      <h1>博客总览</h1>
      <input type='text' class='inputa' v-model='search' placeholder="搜索">
      <div v-for='blog in filteredBlogs' class='single-blog' :key='blog'>
       <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
         <article>
             {{blog.body | snippet}}
         </article>
         
      </div>
  </div>
</template>

<script>
export default {
  name:'show-blogs',
  data(){
      return{
         blogs:[],
         search:''
      }
  },
  created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
           .then(function(data){
               console.log(data.json());
               return data.json()
            // this.blogs=data.body.slice(0,2)
            // console.log(this.blogs);
           })
           .then(function(data){
               var blogsArray=[];
               for(let key in data){
                   console.log(data[key]);
                   data[key].id=key;
                   blogsArray.push(data[key])
               }
               this.blogs=blogsArray

           })
         
  },
  computed: {
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search)
          })
      }
  },


}
</script>

<style>
  #show-blogs{
      max-width: 800px;
      margin: 0 auto;
  }
  .single-blog{
      padding: 20px;
      margin: 20px 0;
      box-sizing: border-box;
      background: #eee;
      border: 1px dotted #aaa;
  }
  .single-blog a{
      color: #444;
       text-decoration: none;
  }
  input[type='text']{
      padding:8px;
      width:100%; 
      box-sizing: border-box;

  }


  .inputa{
      width: 170px;
  }

</style>