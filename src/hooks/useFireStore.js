import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

const useFireStore = collection => {
    const [docs, setdocs] = useState([]);
    useEffect(() => {
       const unsub =  projectFirestore.collection(collection)
        .orderBy('createAt','desc')
        .onSnapshot(snap=>{
            let documents = [];
            snap.forEach(doc=>{
                documents.push({...doc.data(),id:doc.id});
            })
            setdocs(documents);
        })

        return ()=>unsub;
    }, [collection])
    return {docs};
};
export default useFireStore;