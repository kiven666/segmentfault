import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Detail from '@/components/detail'
import Headline from '@/components/headline'
import Spe_colum from '@/components/special_colum'
import Qus_ans from '@/components/qus_ans'
import Discover from '@/components/discover'
import Myzone from '@/components/myzone'
import All from '@/components/child/all'
import Leading from '@/components/child/leading'
import After from '@/components/child/after'

Vue.use(Router)

export default new Router({
  'linkActiveClass': 'active',
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path:'/index',
      name:'Index',
  	  component:Index,
  	  children:[{
  	  	  path:'/headline',
	  	  component:Headline,
	  	  children:[
	  	  {
	  	  	path:'',
		    name:'All',
		  	component:All
	  	  },{
	  	  	path:'leading',
		    name:'Leading',
		  	component:Leading
	  	  },{
	  	  	path:'after',
		    name:'After',
		  	component:After
	  	  }]
	  	},
	  	{
  	  	  path:'/special_colum',
	      name:'Spe_colum',
	  	  component:Spe_colum
	  	},
	  	{
  	  	  path:'/qus_ans',
	      name:'Qus_ans',
	  	  component:Qus_ans
	  	},
	  	{
  	  	  path:'/discover',
	      name:'Discover',
	  	  component:Discover
	  	},
	  	{
  	  	  path:'/myzone',
	      name:'Myzone',
	  	  component:Myzone
	  	}
  	  ]
    },
    {
    	path:'/detail/:id',
    	name:'Detail',
    	component:Detail
    }
  ]
})
