<template>
    <div class="modal" ref="modal">
    <div class="modal-content">
      <h2 @click="closePreview" class="close">X</h2>
      <img :src="this.blogCoverPhoto" alt="" />
    </div>
  </div>
</template>

<script>
export default {
    name:'BlogCoverPreview',
    
    methods: {
        closePreview() {
            this.$store.commit("openPhotoPreview");
        },
    },
    computed: {
        blogCoverPhoto() {
            return this.$store.state.blogPhotoFileUrl;
        },
    },
}
</script>

<style scoped>

.modal{
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.modal-content{
    display: flex;
    justify-content: center;
    position: relative;
    border-radius: 12px;
    background-color: #fff;
    height: 400px;
    width: 600px;
    padding: 50px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

}

.modal-content .close {
    width: 24px;
    height: auto;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    top: 15px;
    right: 15px;
    color: #303030;
}

.modal-content img {
    margin-top: 16px;
    display: block;
    width: auto;
    height: 100%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

</style>

