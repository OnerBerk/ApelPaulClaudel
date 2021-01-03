import Head from 'next/head';
import Link from 'next/link';

// data
import {getAllPosts} from '../../lib/api';

// styles
import styles from '../../styles/home.module.scss';
import blogStyles from '../../styles/blog.module.scss';

const Blog = ({allPosts: {edges}}) => (
        <div className={styles.container}>
            <Head>
                <title>Blog articles page</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Latest blog articles</h1>
                <hr/>
                <section>
                    {edges.map(({node}) => (
                        <div className={blogStyles.listitem} key={node.id}>
                            <div className={blogStyles.listitem__thumbnail}>
                                <figure>
                                    <img
                                        src={node.extraPostInfo.thumbImage.mediaItemUrl}
                                        alt={node.title}
                                    />
                                </figure>
                            </div>
                            <div className={blogStyles.listitem__content}>
                                <h2>{node.title}</h2>
                                <p>{node.extraPostInfo.authorExcerpt}</p>
                                <Link href={`/blog/${node.slug}`}>
                                    <a>Read more ></a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
 )


export default Blog

export async function getStaticProps() {
    const allPosts =  await getAllPosts();
    return {
        props: {
            allPosts
        }
    };
}
