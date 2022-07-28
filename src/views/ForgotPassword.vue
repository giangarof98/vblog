<template>
    <div class="reset-password">
        <div class="form-wrap">
            <form class="reset">
                <h2>Reset Password</h2>
                <p>Forgot password? Please enter email to reset it</p>
                <div class="inputs">
                    <div class="input">
                        <input type="text" placeholder="Email" v-model="email">
                    </div>
                </div>
                <button>Reset</button>
                <div class="angle"></div>
            </form>
            <div class="background"></div>
        </div>

    </div>
</template>

<script>
export default {
    name:'ForgotPassword',

}
</script>

<style scoped>

.reset-password{
    position: relative;
}

h2{
    margin-bottom: 8px;
}

p{
    text-align: center;
    margin-bottom: 32px;
}

</style>