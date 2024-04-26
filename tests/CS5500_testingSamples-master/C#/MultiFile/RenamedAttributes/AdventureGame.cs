using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class AdventureGame : MonoBehaviour
{

    [SerializeField] Text tComp;
    [SerializeField] State pamplemousse;

    State stateeee;

	// Use this for initialization
	void Start()
    {
        stateeee = pamplemousse;
        tComp.text = stateeee.GetStateStory();
	}
	
	// Update is called once per frame
	void Update()
    {
        ManageState();
	}

    private void ManageState()
    {
        var nStates = stateeee.GetNextStates();
        // Looooop.
        for (int jndex = 0; jndex < nStates.Length; jndex++)
        {
            if (Input.GetKeyDown(KeyCode.Alpha1 + jndex))
            {
                stateeee = nStates[jndex];
            }
        }
        tComp.text = stateeee.GetStateStory();
    }
}