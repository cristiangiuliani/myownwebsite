<template lang="html">
	<div class="composer container">
		Sono Il Composer
		<div class="available">
			<h2>Available</h2>
			<transition-group name="skills" enter-active-class="bounceIn" leave-active-class="bounceOut">
				<button v-for="skill in skills" :key="skill.id" @click="toggleSkill(skill.id,'add')">{{ skill.desc }}</button>
			</transition-group>
		</div>
		<div class="selected">
			<h2>Selected</h2>
			<transition-group name="selected" enter-active-class="bounceIn" leave-active-class="bounceOut">
				<button v-for="select in selected" :key="select.id" @click="toggleSkill(select.id,'remove')" >{{ select.desc }}</button>
			</transition-group>
		</div>
		<div class="profiler">
			<h2>You Got</h2>
			<transition-group name="matches" enter-active-class="bounceIn" leave-active-class="bounceOut">
				<div v-for="match in matches"  :key="match.id"  >{{ match.desc }}</div>
			</transition-group>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Composer',
		methods:{
			toggleSkill(id,action){
				var selected = {},
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
				var objProfile = this.profile,
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
						console.log('in arrMatch: '+profile.id);
						if (typeof objCheck === 'undefined'){
							objMatches.push(profile);
							console.log('ADD: '+profile.id);
						}
					}else{
						if (typeof objCheck !== 'undefined'){
							objMatches.splice(indexCheck,1);
							console.log('DEL: '+profile.id);
						}
					}
				});
				console.log(objMatches);
				/*arrMatches.forEach(function(match, index, obj){
					objItem = objProfile.find(function (objItem) { return objItem.id === match; });
					objCheck = objMatches.find(function (objCheck) { return objCheck.id === match; });
					if(typeof objCheck === 'undefined'){
						objMatches.push(objItem);
					}

				});*/

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
