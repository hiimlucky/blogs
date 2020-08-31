<template>
    <div>
       <blogheader></blogheader>
       <router-view></router-view>
   </div>


</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'

import blogheader from './components/BlogHeader'

export default {
  components:{
    AddBlog,
    ShowBlogs,
    blogheader
  }
}
</script>

<style>

</style>
