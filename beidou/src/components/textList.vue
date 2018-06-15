<template lang="html">
  <div class="listBody">
      <ul class="listUl">
          <li v-for="(item, i) in data">
            <router-link :to="{name:toName, params:{month:(item.time.replace(/[^\d]/g,'')).slice(0,6), date:'m'+item.time.replace(/[^\d]/g,'')+'_'+item.lId}}"  target="_blank">
              {{ item.name }}
            </router-link>
            <span>{{ item.time }}</span>
          </li>
      </ul>
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
  props: {
    data:{
      type: Array,
      default: '',
      required: true
    },
    toName:{
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.listBody {
    background-color: #f5f5f5;
    padding: 0 20px 20px;
    .listUl {
      list-style: none;
      padding: 0;
      li {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px dotted #c2c2c2;
        position: relative;
        a {
          display: inline-block;
          width: calc( 100% - 90px);
          font-size: 16px;
          color: #333;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        a:hover, a:focus {
          color: #005db5;
        }
        span {
          position: absolute;
          right: 0;
          font-size: 15px;
          color: #888888;
        }
      }

    }
}
</style>
