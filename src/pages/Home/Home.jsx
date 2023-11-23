import List from "../../components/List/List"
import styles from './Home.module.css'
const Home = ()=>{
    return(
        <section>
            <div className={styles.container_list}>
                <List/>
            </div>
        </section>
    )
}


export default Home