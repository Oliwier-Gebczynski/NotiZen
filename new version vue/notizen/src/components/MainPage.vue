<template>
  <main class="home" id="home">
            <article class="home__article">
                <h2 class="home__article-h2">Z naszą stroną poprawisz swoją efektywność</h2>
                <p class="home__article-text">"Człowiek, który goni dwa zające nie złapie ani jednego." <span class="home__text-person">– Konfucjusz</span> 🐰</p>
            </article>
            <section class="contact">
                <h3 class="contact__h3">Chcesz pomóc nam w rozwoju aplikacji?</h3>
                <p class="contact__content">Jesteśmy dostępni w tych miejscach:</p>
                <ul class="link">
                    <li class="link-item"><a href="https://github.com/Oliwier-Gebczynski"  target="new_blank" class="link-item--a">GitHub</a></li>
                    <li class="link-item"><a href="https://www.facebook.com/oliwier.gebczynski/"  target="new_blank" class="link-item--a">Facebook</a></li>
                    <li class="link-item"><a href="https://www.linkedin.com/in/oliwier-gębczyński-31a4431b3"  target="new_blank" class="link-item--a">LinkedIn</a></li>
                    <li class="link-item"><button class="link-item--button" id="copyBtn">Gmail</button></li>
                </ul>
            </section>
        </main>
</template>

<script>

export default {
  name: "MainPage",
    components: {},
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;

    &__article{
    width: 100%;
    padding: 15% 0 15% 0;
    background: url(../assets/home.jpg);
    background-size: cover;
    background-position: center;

    &-h2{
        font-size: 16px;
        color: #fff;
        margin: 0 5% 3% 5%;
        border-bottom: solid #979797 1px;
        padding-bottom: 2%;
        text-align: center;
    }
    
    &-text{
        font-size: 16px;
        text-align: center;
        margin: 0 5% 0 5%;
        color: #fff;
    }
    
    
   }
}

.contact{
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 15% 5% 3% 5%;
    padding: 5%;

    &__h3{
        font-size: 16px;
        margin-bottom: 5%;
        text-align: center;
        border-bottom: solid #979797 1px;
        padding-bottom: 2%;
    }

    &__content{
        font-size: 16px;
        text-align: center;
        margin-bottom: 5%;
    }
}

.link{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
    align-items: center;
    font-size: 1re;

    &-item{
        width: 25vw;
        margin: 5%;
        border-bottom: solid #979797 1px;
        display: flex;
        justify-content: center;
    
        &--a{
            text-decoration: none;
        }
        
        &--button{
            background: transparent;
            outline: none;
            border: none;
        }
    }
}
</style>