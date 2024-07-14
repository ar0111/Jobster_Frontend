import React, { useContext } from 'react';
import AddJobComponet from './AddJobComponet';
import { AuthContext } from '../../Context/AuthProvider';
import EditJob from './EditJob';

const AddJob = () => {

    const {isEditing} = useContext(AuthContext);

    if(!isEditing) return <AddJobComponet></AddJobComponet>;
    else return <EditJob></EditJob>
};

export default AddJob;