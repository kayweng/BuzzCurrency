<template>
  <div>
    <div class="container-fluid">
    <div class="center white">
      <h4>Our Team</h4>
    </div>
    <div class="carousel-container">
      <transition name="fade" tag="div" mode="out-in">
        <carousel>
            <slide v-for="(member, index) in teamMembers" :key="index">
              <circle-info-card :image="member.image" 
                                :name="member.name"
                                :title="member.title"
                                :info="member.comment"
                                :imageSize="imageSize">
              </circle-info-card>  
            </slide>
        </carousel>
    </transition>
    </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<style scoped>
  div.container-fluid{
    background-color: #2471A3;
    padding: 4px;
    height: 300px;
    max-height: 300px;
  }

  .carousel-container{
    margin: 20px;
  }

  .line{
    min-height: 1px;
    min-width: 100%;
    background-color: #D6EAF8;
  }
</style>

<script>
  import { CircleInfoCard } from 'src/components/index'
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    components: {
      CircleInfoCard,
      Carousel,
      Slide
    },
    data () {
      return {
        teamMembers: [
          { name: 'Allen Cheong', image: 'team/allen.png', title: 'Robot X', comment: 'We have passion to create a better foregin currency exchange environment. This is where you are now.' },
          { name: 'Kay Weng', image: 'team/kayweng.png', title: 'Robot Y', comment: 'How technology is changing the way we see the wolrd which include exchange your foregin currency.Buzz Currency is the destination for you easy to achieve it.' }
        ],
        imageSize: {
          width: '100px',
          height: '100px'
        }
      }
    }
  }
</script>

