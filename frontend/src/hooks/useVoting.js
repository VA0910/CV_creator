import { useState } from 'react';
import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/";

export const useVoting = (projectId, initialVotes = { upvotes: [], downvotes: [] }, user) => {
    const [votes, setVotes] = useState(initialVotes);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (!user) {
        window.location.href = `${BACKEND_URL}auth/google?redirect=${window.location.href}`;
        return { votes, loading, error, handleVote: () => {} };
    }

    const handleVote = async (voteType) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await axios.post(`${BACKEND_URL}project/vote`, {
                projectId,
                voteType,
                userId: user?._id
            });

            setVotes(response.data.votes);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.error || 'Vote failed');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { votes, loading, error, handleVote };
};