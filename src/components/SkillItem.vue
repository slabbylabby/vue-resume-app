<template>
  <div class="skill-item">
    <div class="skill-header d-flex justify-content-between mb-2">
      <span class="skill-name">{{ skill.name }}</span>
      <span class="skill-level">{{ skill.level }}%</span>
    </div>
    <div class="skill-bar">
      <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
    </div>
  </div>
</template>

<script lang="ts">
interface Skill {
  name: string
  level: number
}

export default {
  name: 'SkillItem',
  props: {
    skill: {
      type: Object,
      required: true,
      validator: (skill: Skill) => {
        return skill.name && skill.level !== undefined
      },
    },
  },
}
</script>
