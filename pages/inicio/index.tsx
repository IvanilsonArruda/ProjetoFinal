import styles from "./styles.module.css"
import Image from "next/image"
import Link from "next/link";

function Login() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.form}>
                    <Image
                        className={styles.background}
                        src = {"/assets/Logo.jpg"}
                        alt={"Olar"}
                        width = {450}
                        height = {681}
                    />

                    <div className={styles.texto}>
                        <label> Login </label>
                        <input
                            id={"login"}
                            type={"text"}
                            autoComplete={"login"}
                            className={styles.input}
                        />
                        <label> Senha </label>
                        <input
                            id={"senha"}
                            type={"password"}
                            autoComplete={"senha"}
                            className={styles.input}
                        />
                        <button type={"submit"}> Entrar </button>

                        <Link href={"/"}>
                            <a> Registrar-se </a>
                        </Link>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Login