<template>
    <header class="header">
            <button class="header__button" id="switchBtn"><img src="../assets/light-bulb.svg" class="header__button-img" alt="theme switch"></button>
            <section class="header__logo">
                <h1 class="header__logo-title">NotiZen</h1>
                <img src="../assets/ying-yang.png" class="header__logo-img" alt="logo">
            </section>
            <h2 class="header__info">🧠 Notując zapamiętasz więcej 🧠</h2>
            <ul class="nav">
                <li class="nav__element">
                    <router-link to="/" class="nav__element-button" id="homeBtn">Home</router-link>
                </li>
                <li class="nav__element">
                    <router-link to="/notepad" class="nav__element-button" id="toDo">ToDo</router-link>
                </li>
                <li class="nav__element">
                    <router-link to="#" class="nav__element-button" id="notes">Notes</router-link>
                </li>
                <li class="nav__element">
                    <router-link to="#" class="nav__element-button" id="pomodoroBtn">Pomodoro</router-link>
                </li>
            </ul>
        </header>
</template>

<script>
export default {
    name: "site-header",
};
</script>

<style lang="scss">
.header {
     width: 100%;
     height: auto;
     padding-top: 0vh;
     display: flex;
     flex-direction: column;
     align-items: center;

  &__button{
          position: absolute;
          outline: none;
          background: transparent;
          border: solid 1px;
          top: 6vh;
          right: 6vw;
  
      &-img{
            width: 20px;
            height: 20px;
      }
  }

  &__logo{
          width: 250px;
          
          display: flex;
          justify-content: space-around;
          align-items: center;
  
          &-title{
            font-size: 40px;
         }

         &-img{
            width: 50px;
            height: 50px;
        }
  }

  &__info{
          font-size: 16px;
          color: #979797;
          text-align: center;
  }
}


.nav{
    width: 90vw;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-content: center;
    
    &__element{
        list-style: none;
        width: 20%;
        
        border-bottom: solid #979797 1px;
    
        &-button{
            display: block;
            width: 100%;
            outline: none;
            border: none;
            background-color: transparent;
            text-align: center;
            font-size: 1re;
            
        
        }
        &:hover{
            background-color: #979797;
            transition: ease-in .3s;
        }
    }
}
</style>