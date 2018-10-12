<template lang="html">
	<section class="composer section">
		<div class="container content is-medium has-text-centered">
			<h1>Profile Composer</h1>
			<div class="available">
				<h2>Available Skills</h2>
				<transition-group name="skills" enter-active-class="bounceIn" leave-active-class="bounceOut">
					<button :class="'button is-primary '+skill.profiles.join(' ')" v-for="skill in skills" :key="skill.id" @click="toggleSkill(skill.id,'add')">{{ skill.desc }}</button>
				</transition-group>
			</div>
			<div class="selected">
				<h2>Selected Skills</h2>
				<transition-group name="selected" enter-active-class="bounceIn" leave-active-class="bounceOut">
					<button class="button is-info" v-for="select in selected" :key="select.id" @click="toggleSkill(select.id,'remove')" >{{ select.desc }}</button>
				</transition-group>
			</div>
			<div class="profiler">
				<h2>Profile</h2>
				<ul>
					<transition-group name="matches" enter-active-class="bounceIn" leave-active-class="bounceOut">
						<li v-for="match in matches"  :key="match.id"  >{{ match.desc }}</li>
					</transition-group>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Composer',
		methods:{
			toggleSkill(id,action){
				let selected = {},
					objClicked = {},
					objSelected = {};

				objClicked = action == 'add' ? this.skills : this.selected
				objSelected = action == 'add' ? this.selected : this.skills
				objClicked.forEach(function(skill, index, obj){
					if(skill.id == id){
						obj.splice(index,1);
						selected = skill;
					}
				});
				objSelected.push(selected);
				this.getProfiles();
			},
			getProfiles(){
				let objProfile = this.profile,
					arrMatches = [],
					objMatches = this.matches,
					objItem = {},
					objCheck = {},
					indexCheck = -1;
				this.selected.forEach(function(skill, index, obj){
					skill.profiles.forEach(function(profile, k, p){
						if(!arrMatches.includes(profile)) {
							arrMatches.push(profile)
						}
					});
				});

				this.profile.forEach(function(profile, index, obj){
					objCheck = objMatches.find(function (objCheck) { return objCheck.id === profile.id; });
					indexCheck = objMatches.findIndex(function (indexCheck) { return indexCheck.id === profile.id; });
					if(arrMatches.includes(profile.id)){
						if (typeof objCheck === 'undefined') objMatches.push(profile);
					}else{
						if (typeof objCheck !== 'undefined') objMatches.splice(indexCheck,1);
					}
				});


			}
		},
		data(){
			return{
				selected: [],
				matches: [],
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
					},
					{
						id: 'web-design',
						desc: 'Web Designer'
					},
					{
						id: 'ux-ui',
						desc: 'UX/UI Designer'
					}
				],
				skills: [
					{
						id: 'html',
						desc: 'HTML 5',
						level: 5,
						profiles: ['web-design']
					},
					{
						id: 'css',
						desc: 'CSS 3',
						level: 5,
						profiles: ['web-design']
					},
					{
						id: 'ps',
						desc: 'Adobe Photoshop',
						level: 5,
						profiles: ['web-design','ux-ui']
					},
					{
						id: 'sketch',
						desc: 'Sketch',
						level: 4,
						profiles: ['ux-ui']
					},
					{
						id: 'scss',
						desc: 'SCSS/SASS',
						level: 5,
						profiles: ['fe-dev']
					},
					{
						id: 'less',
						desc: 'LESS',
						level: 5,
						profiles: ['fe-dev']
					},
					{
						id: 'js',
						desc: 'Javascript',
						level: 5,
						profiles: ['fe-dev']
					},
					{
						id: 'vue',
						desc: 'Vue.js',
						level: 3,
						profiles: ['fe-dev']
					},
					{
						id: 'node',
						desc: 'NODE.js',
						level: 2,
						profiles: ['fe-dev', 'be-dev']
					},
					{
						id: 'php',
						desc: 'PHP',
						level: 4,
						profiles: ['be-dev']
					},
					{
						id: 'sql',
						desc: 'SQL',
						level: 4,
						profiles: ['be-dev']
					}
				]
			}
		}
	}
</script>
