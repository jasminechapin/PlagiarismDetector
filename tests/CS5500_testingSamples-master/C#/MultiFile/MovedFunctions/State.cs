using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "State")]
public class State : ScriptableObject
{

    [SerializeField] State[] nextStates;
    [TextArea(10,14)] [SerializeField] string storyText;


    public State[] GetNextStates()
    {
        return nextStates;
    }

    public string GetStateStory()
    {
        return storyText;
    }

}