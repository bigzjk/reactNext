import {withRouter} from 'next/router'
import axios from 'axios'
import comp from '../components/comp'
function alkun({router, results}) {
    let { aa, bb} = router.query
    

    return (
        <div>
            hahahha{aa}---{bb}
            {comp()}
            {results && results.map(item => (
                <li key={item}>{item.contentId}</li>
                
            ))}
            <style jsx>{`
                li{
                    color: red;
                    font-size: 14px;
                }
            `}</style>
        </div>
    )
}
alkun.getInitialProps = async () => {
    let promise = new Promise((resolve, reject) => {
        axios('http://mapi.alkun.top/cms_list_tag?nid=23831003&type=2006&pageNo=0&pageSize=10').then(resp => {
            console.log(resp && resp.data && resp.data.result)
            resolve(resp && resp.data && resp.data.result)
        })
    })
    return  await promise 
}

export default withRouter(alkun)