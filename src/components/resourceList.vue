<template lang="html">
  <div class="listBody3">
      <div class="row">
          <div class="col-sm-6 col-md-4 margin-bottom-10">
              <div class="listImgCon">
                  <a href="#" class="listImgBox"><img src="../imgs/W020180427403091077552.jpg"></a>
                  <p class="listImgP"><a href="#" title="D-Helix天线">D-Helix天线D-Helix天线D-Helix天线</a></p>
              </div>
          </div>
          <div class="col-sm-6 col-md-4 margin-bottom-10">
              <div class="listImgCon">
                  <a href="#" class="listImgBox"><img src="../imgs/W020180427403091077552.jpg"></a>
                  <p class="listImgP"><a href="#" title="D-Helix天线">D-Helix天线D-Helix天线D-Helix天线</a></p>
              </div>
          </div>
          <div class="col-sm-6 col-md-4 margin-bottom-10">
              <div class="listImgCon">
                  <a href="#" class="listImgBox"><img src="../imgs/W020180427403091077552.jpg"></a>
                  <p class="listImgP"><a href="#" title="D-Helix天线">D-Helix天线D-Helix天线D-Helix天线</a></p>
              </div>
          </div>
      </div>

      <div class="text-right">
          <nav aria-label="Page navigation">
              <ul class="pagination">
                  <li>
                      <a href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                      </a>
                  </li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">...</a></li>
                  <li><a href="#">10</a></li>
                  <li>
                      <a href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                      </a>
                  </li>
              </ul>
          </nav>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.listImgCon {
  position: relative;
  .listImgBox {
    display: inline-block;
    height: 135px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .listImgP {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 10px;
    height: 35px;
    width: 100%;
    background-color: rgba(0,0,0,.5);
    margin-bottom: 0;
    a {
      display: inline-block;
      width: 100%;
      height: 35px;
      line-height: 35px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>
