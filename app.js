/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.filter('formatDate', function(d) {
	if(!window.Intl) return d;
	return new Intl.DateTimeFormat('en-US').format(new Date(d));
});

const app = new Vue({
	el:'#app',
	data:{
		term:'',
		results:[],
		noResults:false,
		searching:false
	},
	methods:{
		search:function() {


       //     https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=5
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(this.term)}&limit=100`;

            fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(res => res.json())
			.then(res => {
				this.searching = false;
				this.results = res.results;
			//	this.noResults = this.results.length === 0
          //  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

			});
		}
	}
});





const app1 = new Vue({
    el:'#app1',
    data:{
      term:'',
      posts:[],
      post: '',
      noResults:false,
      searching:false
    },
    methods:{
      search: function() {
        const url = `http://jsonplaceholder.typicode.com/posts/` + this.term ;
         fetch(url)
          .then(res => res.json())

          .then(posts => this.posts = posts)
          .then(console.log(url))
        }

    }

  });















  const appJson = new Vue({
    el:'#appJson',
    data:{
		term:'',
		posts:[],
		noResults:false,
		searching:false
	},
    methods:{
		search:function() {
        const url = `http://jsonplaceholder.typicode.com/posts/${encodeURIComponent(this.term)}` ;
            fetch(url)
            .then(res => res.json())
			.then(res => {this.posts = res.posts;})
        }
    }
});






























/*
const app1 = new Vue({
    el:'#app1',
    data:{

        posts: []
      }
    ,
    created() {
      axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
        this.posts = response.data
      })
      .catch((e) => {
        console.error(e)
      })
    }
  });



const app1 = new Vue({
	el:'#app1',
	data:{
		term:'',
        results:[],
		noResults:false,
		searching:false
	},
	methods:{
		search:function() {


       //     https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=5
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${encodeURIComponent(this.term)}`;

            fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(res => res.json())
			.then(res => {
				this.searching = false;
				this.results = res.results;
		//		this.noResults = this.results.length === 0
       //     .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


			});
		}
	}
});





new Vue({
    el: '#app1',
    data:{
		term:'',
		results:[],
		noResults:false,
		searching:false
	},
    data () {

      return {
        info: null
      }
    },
    mounted () { //Fires on page load instantly

      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => (this.info = response.data))
    }

  })

*/






const app2 = new Vue({
	el:'#app2',
	data:{
		term:'',
		results:[],
		noResults:false,
		searching:false
	},
	methods:{
		search:function() {



            const proxyurl = "https://cors-anywhere.herokuapp.com/";

            const url = `https://jsonplaceholder.typicode.com/posts?userId=${encodeURIComponent(this.term)}`;
            fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(res => res.json())
			.then(res => {
				this.searching = false;
				this.results = res.results;
			//	this.noResults = this.results.length === 0
          //  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

			});
		}
	}
});









