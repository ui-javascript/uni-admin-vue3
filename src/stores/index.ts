// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => {
		return { count: 0 };
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		increment() {
			this.count++;
		},
	},
});

// 然后在组件中使用它,方法如下
// <script setup lang="ts">

// import { useCounterStore } from '@/stores/counter';
// const counter = useCounterStore();
// 		counter.count++;
// 		// 可以手动触发
// 		counter.$patch({ count: counter.count + 1 });
// 		// 或者使用 actions
// 		counter.increment();
		
// </script>

