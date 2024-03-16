import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { db } from '../../../config/firebase'; // Update the path accordingly
import { doc, getDoc } from 'firebase/firestore';

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setIsLoading(false);

      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            setUserData(userDocSnapshot.data());
          } else {
            console.error('User document not found.');
          }
        } catch (error) {
          console.error('Error fetching user document:', error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return { isLoading, currentUser, userData };
};

export default useCurrentUser;
