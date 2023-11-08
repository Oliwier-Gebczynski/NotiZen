<template>
   <section class="list template" id="listSection">
            <h2 class="list__title h2">Zadania</h2>
            <form class="list__note form" @submit.prevent="addTask">
                <input type="submit" value="+" class="list__note-button submit_btn" id="submit">
                <input type="text" class="list__note-input input" v-model="newTask" placeholder="Wpisz zadanie do wykonania" />
            </form>
            <section class="catalogue" id="list">
              <div v-for="(task, index) in tasks" :key="index" class="catalogue__element">
                <h3 class="catalogue__element-content"> {{ task.text }} </h3>
                <button @click="markAsDone(index)" class="catalogue__element-done">✔️</button>
                <button @click="removeTask(index)" class="catalogue__element-delete">x</button>
              </div>
            </section>
        </section>
</template>
  
<script>
  
  export default {
    name: "ToDo",
      components: {},
    

    data() {
      return {
        newTask: "",
        tasks: [],
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() === "") {
          alert("Wpisz dane w pole tekstowe!");
        } else {
          this.tasks.push({ text: this.newTask, done: false });
          this.newTask = "";
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      },
      markAsDone(index) {
        this.tasks[index].done = true;
      },
    },
  };
</script>
  
<style lang="scss">
//Fonts
$h2-mobile: 16px;
$title-mobile: 40px;
$nav-mobile: 18px;
$h3-mobile: 25px;
$headerNote-mobile: 18px;
$content-mobile: 16px;
$footer-text: 15px;

$h2-pc: 20px;
$nav-pc: 22px;
$articleTitle-pc: 25px;
$h3-pc: 25px;
$content-pc: 18px;

//Colors
$light_bgc: #fff;
$light_border: #979797;
$light_font: #fff;

$dark_bgc: #2C2C2C;
$dark_font: #fff;

.list{
    width: 90%;
    height: auto;
    margin-top: 10%;
    padding: 0 5%;
    flex-direction: column;
    align-items: center;

    &__title, .h2{
        width: 100%;
        font-size: $h3-mobile;
        border-bottom: solid $light_border 1px;
    }

    &__note{
        height: 5vh;
        width: 100%;
        margin-top: 1%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-button{
            width: 3vh;
            height: 3vh;
            border-style: solid;
            border-width: 1px;
            border-color:  $light_border;
            outline: none;
            background-color: transparent;
        }

        &-input{
            height: 3vh;
            width: 75vw;
            margin-left: 10px;
            border: solid $light_border 1px;
            outline: none;
        }
    }

    .catalogue{
        width: 100%;
        height: auto;
        margin-top: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__element{
            width: 90%;
            height: 30px;
            margin-top: 3%;
            padding-bottom: 1%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-bottom: solid $light_border 1px;

            &-content{
                height: 25px;
                width: 97%;
                padding-left: 3.9%;
                font-size: $h2-mobile;
            }

            &-delete{
                width: 25px;
                height: 25px;
                outline: none;
                background-color: transparent;
                border: solid $light_border 1px;
                align-self: flex-end;

                &:hover{
                    background-color: rgb(255, 67, 67);
                    color: white;
                    transition: ease-in .2s;
                }
            }

            &-done{
                width: 25px;
                height: 25px;
                outline: none;
                background-color: transparent;
                border: solid $light_border 1px;
                align-self: flex-end;
                margin-right: 3%;

                &:hover{
                    background-color: rgb(4, 126, 0);
                    color: white;
                    transition: ease-in .2s;
                }
            }


        }
    }
}
</style>