<!--
 * @Autor        : Pat
 * @Description  : 
 * @Email        : gouqingping@yahoo.com
 * @Date         : 2020-03-11 20:00:44
 * @LastEditors  : Pat
 * @LastEditTime : 2020-08-06 09:46:23
 -->
<template>
	<div class="home">
		<div class="title">
			<div class="titleH4">
				欢迎进入
				<span style="color:#2196F3">{{enterpriseInfo.name}}</span> 系统
			</div>
		</div>
	</div>
</template>
<script>
import Vue from "vue";
import amb from "@/init/amb.js";
import { login } from "@/api/index.js";
import Component from "vue-class-component";
@Component({})
export default class Test extends Vue {
	enterpriseInfo = {
		name: amb.moduleName,
	};
	constructor() {
		super();
		this.getData();
	}
	async mounted() {
		console.log(await login());
	}
	getData() {}
}
</script>
<style scoped>
.home {
	padding: 20px;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
}
.titleH4 {
	color: #2e2a58;
	font-size: 36px;
}
</style>
