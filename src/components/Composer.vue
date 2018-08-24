<template lang="html">
	<div class="composer container">
		Sono Il Composer
		<div class="available">
			<h2>Selected</h2>
			<transition-group name="selected" enter-active-class="bounceIn" leave-active-class="bounceOut">
				<button v-for="select in selected" :key="skill.id" @click="toggleSkill(select.id)" >{{ select.desc }}</button>
			</transition-group>
		</div>
		<div class="available">
			<h2>Available</h2>
			<transition-group name="skills" enter-active-class="bounceIn" leave-active-class="bounceOut">
				<button v-for="skill in skills" :key="skill.id" @click="toggleSkill(skill.id)">{{ skill.desc }}</button>
			</transition-group>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Composer',
		methods:{
			addSkill(item){
				this.selected.push(item);
				//this.skills.splice(this.skills[id],1);
			},
			removeSkill(id){
				this.skills.push(this.skills[id]);
				this.selected.splice(this.skills[id],1);
			},
			toggleSkill(id){

			}
		},
		data(){
			return{
				selected: [],
				legend: [	'only knowledge',
							'knowledge and exercises',
							'used in few real projects',
							'used in many real project',
							'teacher of this'
						],
				profile: [
					{
						id: 'fe-dev',
						desc: 'Front End Developer'
					},
					{
						id: 'be-dev',
						desc: 'Back End Developer'
					}
				],
				skills: [
					{
						id: 'html',
						desc: 'HTML 5',
						level: 5,
						profiles: ['fe-dev']
					},
					{
						id: 'css',
						desc: 'CSS 3',
						level: 5,
						profiles: ['fe-dev']
					},
					{
						id: 'node',
						desc: 'NODE.js',
						level: 2,
						profiles: ['fe-dev', 'be-dev']
					},
					{
						id: 'vue',
						desc: 'Vue.js',
						level: 3,
						profiles: ['fe-dev']
					}
				]
			}
		}
	}
</script>
