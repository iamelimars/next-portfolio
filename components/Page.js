import { PrismicProvider } from './PrismicContext';
import { useEffect, useState } from 'react'
import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://eli-portfolio.cdn.prismic.io/api/v2';

//Custom Hook
function useProjects() {
    const [projects, setProjects] = useState({
        results: []
    })
    useEffect(function () {
        (async () => {
            console.log('Mounting or updating');
            // const req = context.req
            const projects = await getProjects()
            const data = projects
            // console.log(data);
            setProjects(data);
        })();
    }, []);
    return projects
}

function getProjects() {
    const data = Prismic.api(apiEndpoint)
        .then(api => {
            // console.log(api);
            const proj = api.query(Prismic.Predicates.at('document.type', 'works'), {
                orderings: '[my.works.first_publication_date desc]'
            })

            // console.log(proj);
            return proj

        })
        .catch(err => {
            // console.log(err);

        })
    return data

    // const API = Prismic.getApi(apiEndpoint)
    // return API.query(Prismic.Predicates.at('document.type', 'works'), {
    //     orderings: '[my.works.first_publication_date desc]'
    // })
}

export default function Page({ children }) {
    const projects = useProjects();
    return (
        <PrismicProvider value={{
            projects,
        }}>
            <div className="page">
                {children}
            </div>
        </PrismicProvider>
    )
}