import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoPrimitiveDot } from "react-icons/go";
import {AiOutlineUserDelete} from "react-icons/ai"
import { ContactListContainer, ContactListItem, Button } from "./ContactList.styled";
import { phoneBookOperations, phoneBookSelectors, phoneBookActions } from "../redux/contacts";


export default function ContactList() {
    
//      const getVisibleContact = (allContacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//   }
//     const contacts = useSelector(({contacts:{items, filter}}) => getVisibleContact(items,filter));
    
    const contacts = useSelector(phoneBookSelectors.getContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(phoneBookOperations.fetchContacts());
    }, [dispatch])

    return (
        <ContactListContainer>
            {contacts.length > 0 && contacts.map(({id, name, number}) => (
                <ContactListItem key={id}>
                    <GoPrimitiveDot/>
                    {name}: {number}
                    <Button onClick={() => dispatch(phoneBookActions.deleteContact(id))}>
                        <AiOutlineUserDelete />
                        Delete</Button>
                </ContactListItem>
            ))}
        </ContactListContainer>
    )
}