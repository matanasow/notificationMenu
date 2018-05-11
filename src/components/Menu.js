new Vue({
    el: '#menu',
    
    ready: function()
    {
      var self = this
      window.addEventListener('click', function(e){
        if (! e.target.parentNode.classList.contains('menu__link--toggle'))
        {
          self.close()
        }
      }, false)
    },
    
    data: {
      dropDowns: {
        ranking: { open: false}  
      }
    },
    
    methods: {
      toggle: function(dropdownName)
      {
        //alert(dropdownName)
         this.dropDowns[dropdownName].open = !this.dropDowns[dropdownName].open;
      },
      
      close: function()
      {
        for (dd in this.dropDowns)
        {
          this.dropDowns[dd].open = false;    
        }
      }
    }
    
  })