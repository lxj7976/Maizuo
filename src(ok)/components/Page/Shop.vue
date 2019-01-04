<template>
  <div>shop
<mt-button type="default" @click="showAlert">default</mt-button>
<mt-button type="primary" @click="t.close()">primary</mt-button>
<mt-button type="danger">danger</mt-button>
  {{a|addzero}} &nbsp;{{b|addzero('!')}}&nbsp;{{c|addzero}}&nbsp;{{d|addzero('!')}}
  <Test2><template slot="one"><button>按钮</button>  <h3>123</h3> <p>2222</p></template></Test2>
 
  </div>

</template>
<script>
import { Toast } from 'mint-ui';
import Test2 from "./Test2"
	export default {
		data(){
			return {
				t:'',
				a:1,
				b:11,
				c:7,
				d:12
			}
		},
		components:{
		    Test2
		},
		methods:{
			showAlert(){
				  this.t= Toast({
				  iconClass:"fa fa-spinner fa-pulse",
				  position: 'middle',
				  duration: -1
				});

				
			}
		}
	}
</script>