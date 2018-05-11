<template>
  <div class="hello">
    <div class="text-center">
  <li class="active floatRight">
    <div class="dropdown floatRight">
      <button class="btn btn-primary" type="button" data-toggle="dropdown">
        <span class="user-avatar">
            fan fan
        </span>
      </button>
      <ul class="dropdown-menu pull-right" role="menu">
        <li>
          kdkdkdk
        </li>
        <li>
          okaodowaod
        </li>
      </ul>
    </div>
  </li>
</div>
<div>
  <b-dropdown id="ddown1" text="Notifications(0)" class="m-md-2">
    <b-dropdown-item v-bind:key="notification.id" v-for="notification in notifications">
         <div> {{notification.type}}
         </div>
         <div>
           {{notification.title}}
         </div>
    </b-dropdown-item>
    
    <b-dropdown-divider></b-dropdown-divider>
    
  </b-dropdown>
</div>

    <div>
      <ul>
        <li v-bind:key="notification.id" v-for="notification in notifications">
          {{notification.type}}
           {{notification.title}}
        </li>
      </ul>
    </div>
    <!-- <div class="row">  
  <ul class="menu">
    <li class="menu__item">
        <a class="menu__link" href="#">Home</a>
    </li>

    <li class="menu__item menu__item--dropdown" v-on:click="toggle('ranking')" v-bind:class="{'open' : dropDowns.ranking.open}">
        <a class="menu__link menu__link--toggle" href="#">
            <span>Rangliste</span>
            <i class="menu__icon fa fa-angle-down"></i>
        </a>

        <ul class="dropdown-menu">
            <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Aktuelle Runde</a>
            </li>

            <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Siegerliste</a>
            </li>
        </ul>
    </li>

    <li class="menu__item">
        <a class="menu__link" href="#">Belegungskalender</a>
    </li>
</ul> -->
<!--   
  <pre>{{ dropDowns | json }}</pre>
</div> -->
    <div>
      <input type="text" v-model="input_val">
</div>
<div>
<p>{{ message }}</p>  
  <!-- <button v-on:click="reverseMessage">Reverse Message</button> -->
</div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
      input_val: '',
      message: 'reverse this message',
      msg: 'Hello Pesho',
      isOpened: true,
      notifications: [
  {
    id: 1321,

    type: 'text',

    title: 'Test notification',

    text: 'Test text notification',

    expires: 3600
  },
  {
    id: 4322,

    type: 'bonus',

    title: 'You win a bonus!',

    requirement: 'Deposit $50 to win',

    expires: 3600
  },
  {
    id: 5453,

    type: 'Promotion',

    image: 'http://www.absolat.com/images/promotion-in-marketing.jpg',

    title: '%30 off on sports betting',

    link: 'https://www.google.com/',
  },
  {
    id: 5236,

    type: 'text',

    title: 'Test notification',

    text: 'Test text notification',

    expires: 5
  }
],
 methods: {
        reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
    //   ready: function()
    // {
    //   var self = this
    //   window.addEventListener('click', function(e){
    //     if (! e.target.parentNode.classList.contains('menu__link--toggle'))
    //     {
    //       self.close()
    //     }
    //   }, false)
    // },
    
    // data: {
    //   dropDowns: {
    //     ranking: { open: false}  
    //   }
    // },
    
    // methods: {
    //   toggle: function(dropdownName)
    //   {
    //     //alert(dropdownName)
    //      this.dropDowns[dropdownName].open = !this.dropDowns[dropdownName].open;
    //   },
      
    //   close: function()
    //   {
    //     for (dd in this.dropDowns)
    //     {
    //       this.dropDowns[dd].open = false;    
    //     }
    //   },
    //   reverseMessage: function () {
    //   this.message = this.message.split('').reverse().join('')
    // }
    }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
