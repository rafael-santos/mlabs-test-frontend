// Based on vue-good-wizard
// https://github.com/xaksis/vue-good-wizard

<template>
  <div class="wizard">
    <ul class="wizard__steps">
      <li class="wizard__step"
        :class="{
          'active': currentStep >= index,
        }"
        :style="wizardStepStyle"
        v-for="(step, index) of steps" :key="index">
        <div class="wizard__step__indicator">
          <span class="wizard__step__line"></span>
          <span class="wizard__step__dot"></span>
        </div>
        <div class="wizard__step__label">
          {{step.label}}
        </div>
      </li>
    </ul>
    <div ref="wizard-body">
      <div :key="currentSlot">
        <slot :name="currentSlot"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wizard',

  props: {
    steps: {},
    onNext: {},
    onBack: {}
  },

  data () {
    return {
      currentStep: 0
    };
  },
  computed: {
    wizardStepStyle() {
      return {
        width: `${100/this.steps.length}%`
      };
    },
    arrowPosition() {
      var stepSize = 100/this.steps.length;
      var currentStepStart = stepSize * this.currentStep;
      var currentStepMiddle = currentStepStart + stepSize/2;
      if(this.steps.length === 1)
        return 'calc('+currentStepMiddle+'%)';
      else
        return 'calc('+currentStepMiddle+'% - 14px)';
    },
    currentSlot() {
      return this.steps[this.currentStep].slot;
    },
    backEnabled() {
      return this.currentStep !== 0;
    }
  },
  methods: {
    goNext (skipFunction) {
      if (!skipFunction && typeof this.onNext === 'function'){
        if(!this.onNext(this.currentStep)) {
          //returned false. don't do anything
          return;
        }
      }
      if (this.currentStep < this.steps.length-1) {
        this.currentStep++;
      }
    },
    goBack (skipFunction) {
      if (!skipFunction && typeof this.onBack === 'function'){
        if(!this.onBack(this.currentStep)) {
          //returned false. don't do anything
          return;
        }
      }
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },

    goTo(step) {
      if (Number.isInteger(step)
        && step < this.steps.length
        && step >= 0) {
        this.currentStep = step;
      } 
    }
  }
};
</script>

<style lang="scss" scoped>
/* Header Steps 
*******************************/
.wizard {
  position: relative;
  width:  100%;
}

.wizard__steps{
  list-style-type:  none;
  text-align: justify;
  -ms-text-justify: distribute-all-lines;
  text-justify: distribute-all-lines;
  padding:  0;
  margin: 30px 0;
  position:  relative;
}

.stretch {
  width: 100%;
  display: inline-block;
  font-size: 0;
  line-height: 0
}

.wizard__step {
  vertical-align: bottom;
  display: inline-block;
  text-align: center;
  position:  relative;
}

.wizard__step__indicator {
  position: relative;
}

.wizard__step__dot {
  background-color: var(--color-neutral-gray-light);
  border-radius: 50%;
  box-sizing: content-box;
  display:  block;
  height:  11px;
  left:  50%;
  position:  relative;
  transform: translateX(-50%);
  width:  11px;
  z-index: 1;
}

.wizard__step__line {
  background-color: var(--color-neutral-gray-light);
  bottom:  12px;
  height:  2px;
  position: absolute;
  right:  100%;
  top: 50%;
  transform: translateX(50%) translateY(-50%);
  width:  calc(100% - 18px);
}

.wizard__step:first-child .wizard__step__line{
  display: none;
}

.wizard__step.active .wizard__step__dot {
  background-color: var(--color-support-info-pure);
}

.wizard__step.active:not(:first-child) .wizard__step__line {
  background-color: var(--color-support-info-pure);
}

.wizard__step__label {
  color:  #98a4af;
  font-size: rem(12);
  margin-top: 8px;
}
</style>
