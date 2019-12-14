const API="https://api.foriio.com/api/v1";

const VIDEO = 1;
const IMAGE = 2;

const getUsers = () => {
    return fetch(`${API}/promoted/users`)
    .then(res => {
        if(res.status === 200) return res.json()
        else throw (res.status);
    })
    .catch(error => {
        console.log("Error:", error)
    })
};

const getProfile = (username) => {
    const profile = fetch(`${API}/users/${username}/profile`)
        .then(res => {
            if(res.status === 200) return res.json()
            else throw (res.status);
        })
        .then(data => {
            return data.profile;
        })
        .catch(error => {
            console.log("Error:", error)
        })

    const worksAndTags = fetch(`${API}/users/${username}/works`)
        .then(res => {
            if(res.status === 200) return res.json()
            else throw (res.status);
        })
        .then(data => {
            // Create tags
            let tags = {};
            tags["All"] = [];
            data.works.forEach((work, index) => {
                work.category_list.forEach(category => {
                    if(!tags[category]) tags[category] = [];
                    tags[category].push(index);
                })
                tags["All"].push(index);
            })
            return [ data.works, tags ]
        })
        .catch(error => {
            console.log("Error:", error)
        })
    return Promise.all([profile, worksAndTags]);
}

const getProject = (id) => {
    return fetch(`${API}/works/${id}`)
    .then(res => {
        if(res.status === 200) return res.json()
        else throw (res.status);
    })
    .then(data => {
        const { creative_roles, description, title, images, videos, thumbnail, id, author } = data.work;
        return { 
            credits: creative_roles,
            description,
            title,
            images,
            videos, 
            id,
            mediatype: images ? IMAGE : videos ? VIDEO : undefined,
            noOfMedia: images ? images.length : videos ? videos.length : 0,
            thumbnail,
            author,
        };
    })
    .catch(error => {
        console.log("Error:", error)
    })
}

export { getUsers, getProfile, getProject }