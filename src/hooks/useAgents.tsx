import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IAgent, IUpdateAgent } from "types/agent";
import {
  getAllAgents,
  updateAgentDetails,
  removeAgent,
  getTotalNumOfCreatedAgents
} from "api/agents";
import toast from "react-hot-toast";

const useAgents = (pageNumber: number = 0, agentPerPage: number = 20) => {
  const navigate = useNavigate();
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPage] = useState(0);
  const [totalAgents, setTotalAgents] = useState(0);

  useEffect(() => {
    getTotalNumOfCreatedAgents()
      .then((response) => {
        setTotalAgents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setError("");
    //This will cancel the request when the component unmount
    const controller = new AbortController();
    const { signal } = controller;

    getAllAgents(pageNumber, agentPerPage, { signal })
      .then((data) => {
        setLoading(false);
        setError("");
        setAgents((preState) => [...data.agents]);
        setTotalPage(data.totalAgents);
      })
      .catch((error: any) => {
        setLoading(false);
        if (signal.aborted) return;
        setError(error.message);
        toast.error(error.message);
      });
  }, [pageNumber, agentPerPage]);

  const filteredAgents = agents.filter((agent) => {
    if (searchTerm !== "") {
      const regex = new RegExp(`${searchTerm}`, "gi");
      return (
        agent.firstName?.match(regex) ||
        agent.surname?.match(regex) ||
        agent.businessName?.match(regex) ||
        agent.state?.match(regex) ||
        agent.email?.match(regex) ||
        agent.choiceOfSuperAgent.match(regex)
      );
    }

    return agent;
  });

  const updateDetails = (agentId: IUpdateAgent) => {
    updateAgentDetails(agentId)
      .then((response) => {
        if (response.status === "Success") {
          toast.success(response.message);
          navigate("/agents");
          return;
        }

        toast.error(response.message);
      })
      .catch((error) => {
        console.log("Error updating agent: ", error.message);
      });
  };

  const deleteAgent = (agentId: string | undefined) => {
    removeAgent(agentId)
      .then((response) => {
        if (response.status === "Success") {
          setAgents(agents.filter((agent) => agent._id !== agentId));
          toast.success(response.message);
          return;
        }

        toast.error(response.message);
      })
      .catch((error) => {
        console.log("Error deleting agent", error.message);
      });
  };

  return {
    loading,
    error,
    totalPages,
    totalAgents,
    filteredAgents,
    setSearchTerm,
    updateDetails,
    deleteAgent
  };
};

export default useAgents;
