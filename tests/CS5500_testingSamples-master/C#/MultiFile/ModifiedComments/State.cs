using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// Wow.
// Wow.
// Wow.


/*




 This is a useful comment!






*/

[CreateAssetMenu(menuName = "State")]
public class State : ScriptableObject
{

    [TextArea(10,14)] [SerializeField] string storyText;
    [SerializeField] State[] nextStates;

    public string GetStateStory()
    {
        // Wow.
        return storyText;
    }
// Wow.
    public State[] GetNextStates()
    {
        // Wow.
        return nextStates; // Wow.
    }
}