import { useEffect, useState } from "react";
import { projectStorage,projectFirestore,timestamp} from "../firebase/config";


const useStorage = file=>{
    const [progress, setprogress] = useState(0);
    const [err, seterr] = useState(null);
    const [url, seturl] = useState(null);

    useEffect(() => {
        const uploadTask = projectStorage.ref().child("images/"+file.name).put(file);
        const collectionRef = projectFirestore.collection('images');

        uploadTask.on('state_changed',snapshot=>{
            let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            setprogress(percentage);
        },err=>{
            seterr(err);
        },()=>{
                uploadTask.snapshot.ref.getDownloadURL().then(function(url) {
                 seturl(url);
                 const createAt = timestamp();
                 collectionRef.add({url,createAt});
                })
            }
        )
}, [file]);
    return {progress,url,err}
}
export default useStorage;