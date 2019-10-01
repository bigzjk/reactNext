import {withRouter} from 'next/router'
import comp from '../components/comp'
function alkun({router}) {
    let { aa, bb} = router.query
    

    return (
        <div>
            hahahha{aa}---{bb}
            {comp()}
        </div>
    )
}
export default withRouter(alkun)