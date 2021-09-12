<template>
  <div style="text-align: center;">
    <img src="https://media.giphy.com/media/EXHHMS9caoxAA/giphy.gif">
    <h1>Error!</h1>
    {{ error.message }} {{ error.statusCode }}
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Error Encountered'
    }
  },
  props: {
    error: {
      type: Object,
      required: true,
    }
  }
}
</script>