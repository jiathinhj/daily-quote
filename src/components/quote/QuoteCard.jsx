import React, { useEffect } from "react";
import { Badge, Button, Card, Spinner } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import ErrorToast from "./ErrorToast";
import useRandomBg from "../hooks/useRandomBg";

const QuoteCard = () => {
  const { fetchBg } = useRandomBg();
  const { data, fetchData, error, loading } = useFetch(
    "https://api.quotable.io/random"
  );

  useEffect(() => {
    loading && fetchBg();
  }, [loading]);

  return (
    <>
      <div className="quote-section">
        {loading ? (
          <>
            <Spinner style={{ color: "#19adec" }} />
          </>
        ) : data ? (
          <Card className="quote-card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{data.content}</p>
                <footer className="blockquote-footer">{data.author}</footer>
              </blockquote>
            </Card.Body>
            <Card.Footer>
              {data.tags.map((tag) => (
                <Badge key={`tag-${tag}`} className="tag">{`#${tag}`}</Badge>
              ))}
            </Card.Footer>
          </Card>
        ) : (
          error && <ErrorToast />
        )}
      </div>
      <Button
        disabled={loading}
        className="change-quote-btn"
        onClick={fetchData}
      >
        New quote
      </Button>
    </>
  );
};

export default QuoteCard;
